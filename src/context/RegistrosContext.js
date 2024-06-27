import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { obtener_todas_citas } from "../api/api_citas";

export const RegistrosContext = createContext();

export const RegistrosProvider = ({ children }) => {
  const [visibleBuscador, setvisibleBuscador] = useState(false);
  const [cargandoRegistros, setcargandoRegistros] = useState(false);
  const [pacientesconRegistro, setPacientesconRegistro] = useState(false);
  const { userToken } = useContext(AuthContext);

  const mostrarPacientesconRegistros = async () => {
    try {
      setcargandoRegistros(true);
      const { data } = await obtener_todas_citas(userToken);

      const pacientesRegistro = data.data
        .filter((cita) => cita.registroMedico !== null)
        .map((cita) => ({
          idCita: cita._id,
          idPaciente: cita.idPaciente._id,
          cedulaPaciente: cita.idPaciente.cedula,
          nombrePaciente: cita.idPaciente.nombre,
          apellidoPaciente: cita.idPaciente.apellido,
          citaCancelada: cita.isCancelado,
          idRegistroMedico: cita.registroMedico,
        }));

        const pacientesUnicos = pacientesRegistro.filter((paciente, index, self) =>
          index === self.findIndex(p => p.idPaciente === paciente.idPaciente)
      );
      console.log("Estos son los pacientes con registros: ", pacientesUnicos);
      setPacientesconRegistro(pacientesUnicos);
    } catch (error) {
      console.error(error.response?.data?.msg || error.message);
      setPacientesconRegistro([]);
    } finally {
      setcargandoRegistros(false);
    }
  };

  return (
    <RegistrosContext.Provider
      value={{
        visibleBuscador,
        setvisibleBuscador,
        cargandoRegistros,
        pacientesconRegistro,
        mostrarPacientesconRegistros,
      }}
    >
      {children}
    </RegistrosContext.Provider>
  );
};

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  obtener_cita_id,
  obtener_citas_paciente_especifico,
  obtener_todas_citas,
} from "../api/api_citas";
import { guardarCitasStorage, obtenerTokenStorage } from "../storage/storage";
import { AuthContext } from "./AuthContext";

export const CitasContext = createContext();

export const CitasProvider = ({ children }) => {
  const [markDates, setMarkdates] = useState({});
  const [loadingCalendar, setLoadingCalendar] = useState(false);
  const [citasRealizadas, setCitasRealizadas] = useState([]);
  const [citasCanceladas, setCitasCanceladas] = useState([]);
  const [citasPendientes, setCitasPendientes] = useState([]);
  const [detallesCitas, setdetallesCitas] = useState([]);
  const [tipoCita, settipoCita] = useState("");
  const [loadDetalle, setloadDetalle] = useState(false);

  const {
    guardarMensaje,
    mostrarAlerta,
    isLoggedIn,
    infoUsuariObtenida,
    userToken,
  } = useContext(AuthContext);

  const { _id, isDoctor, isPaciente } = infoUsuariObtenida;

  useEffect(() => {
    setCitasCanceladas([]);
    setCitasPendientes([]);
    setCitasRealizadas([]);
    setMarkdates({});
    settipoCita("");
    setdetallesCitas([]);
  }, [isLoggedIn]);

  useEffect(() => {
    setdetallesCitas([])
  }, [tipoCita])
  


  const obtenerCitas = async () => {
    try {
      setLoadingCalendar(true);
      const tokenStorage = await obtenerTokenStorage();

      const response = await obtener_todas_citas(tokenStorage);
      if (response && response.data) {
        const citas = response.data.data;

        const citasFormateadas = citas.map((citaFormateada) => ({
          idCita: citaFormateada._id,
          start: new Date(citaFormateada.start),
          end: new Date(citaFormateada.end),
          idPaciente: citaFormateada.idPaciente._id,
          nombrePaciente: citaFormateada.idPaciente.nombre,
          apellidoPaciente: citaFormateada.idPaciente.apellido,
          idDoctor: citaFormateada.idDoctor,
          citaCancelada: citaFormateada.isCancelado,
        }));
        console.log("esta es la respuesta de las citas: ", citasFormateadas);

        await guardarCitasStorage(citasFormateadas);
        return citasFormateadas;
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      console.log(error.response?.data?.msg);
      return [];
    } finally {
      setLoadingCalendar(false);
    }
  };

  const obtenerCitasPaciente = async (id) => {
    try {
      setLoadingCalendar(true);
      const tokenStorage = await obtenerTokenStorage();
      const response = await obtener_citas_paciente_especifico(
        tokenStorage,
        id
      );
      if (response && response.data) {
        const citas = response.data.data;

        const citasFormtP = citas.map((citaFormateada) => ({
          idCita: citaFormateada._id,
          start: new Date(citaFormateada.start),
          end: new Date(citaFormateada.end),
          idPaciente: citaFormateada.idPaciente._id,
          nombreDoctor: citaFormateada.idDoctor.nombre,
          apellidoDoctor: citaFormateada.idDoctor.apellido,
          citaCancelada: citaFormateada.isCancelado,
        }));
        console.log("esta es la respuesta de las citas p: ", citasFormtP);
        await guardarCitasStorage(citasFormtP);
        return citasFormtP;
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      console.log(error.response?.data?.msg);
      return [];
    } finally {
      setLoadingCalendar(false);
    }
  };

  const obtenerCitasPendientes = useCallback(async () => {
    try {
      setLoadingCalendar(true);
      let citas;
      if (isDoctor) {
        console.log("soy doctor: ", isDoctor);
        citas = await obtenerCitas();
      } else {
        console.log("soy paciente");
        citas = await obtenerCitasPaciente(_id);
      }

      const fechaHoy = new Date();
      const citasPendientes = citas.filter(
        (citasP) => new Date(citasP.start) > fechaHoy && !citasP.citaCancelada
      );
      console.log("estas son las citas pendientes", citasPendientes);
      setCitasPendientes(citasPendientes);
      settipoCita("Pendientes");
      const fechasMarcadas = marcarFechas(citasPendientes);
      setMarkdates(fechasMarcadas);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  }, [isDoctor, _id]);

  const obtenerCitasRealizadas = useCallback(async () => {
    try {
      setLoadingCalendar(true);
      settipoCita("Realizadas");
      let citas;
      if (isDoctor) {
        console.log("soy doctor: ", isDoctor);
        citas = await obtenerCitas();
      } else {
        console.log("soy paciente");
        citas = await obtenerCitasPaciente(_id);
      }

      const fechaHoy = new Date();
      const citasRealizadas = citas.filter(
        (citasR) => new Date(citasR.start) < fechaHoy && !citasR.citaCancelada
      );

      console.log("estas son las citas realizadas", citasRealizadas);
      setCitasRealizadas(citasRealizadas);
      const fechasMarcadas = marcarFechas(citasRealizadas);
      setMarkdates(fechasMarcadas);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  }, [isDoctor, _id]);

  const obtenerCitasCanceladas = useCallback(async () => {
    try {
      setLoadingCalendar(true);
      settipoCita("Canceladas");
      let citas;
      if (isDoctor) {
        console.log("soy doctor: ", isDoctor);
        citas = await obtenerCitas();
      } else {
        console.log("soy paciente");
        citas = await obtenerCitasPaciente(_id);
      }
      const citasCanceladas = citas.filter((citasC) => citasC.citaCancelada);
      console.log("estas son las citas canceladas: ", citasCanceladas);
      setCitasCanceladas(citasCanceladas);
      const fechasMarcadas = marcarFechas(citasCanceladas);
      setMarkdates(fechasMarcadas);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  }, [isDoctor, _id]);

  const marcarFechas = (citas) => {
    return citas.reduce((acc, cita) => {
      const date = new Date(cita.start).toISOString().split("T")[0];
      if (acc[date]) {
        acc[date].dots.push({ key: cita.idCita, color: "#F27F1B" });
      } else {
        acc[date] = { dots: [{ key: cita.idCita, color: "#F27F1B" }] };
      }
      return acc;
    }, {});
  };

  const obtenerCitasFecha = async (fechaSeleccionada) => {
    try {
      setloadDetalle(true)
      setdetallesCitas([])
      if (
        fechaSeleccionada &&
        Object.keys(markDates).length === 0 &&
        citasRealizadas.length === 0 &&
        citasPendientes.length === 0 &&
        citasCanceladas.length === 0 &&
        tipoCita === ""
      ) {
        guardarMensaje(
          "Lo sentimos, primero debes seleccionar el tipo de cita que quieras visualizar"
        );
        mostrarAlerta(true);
      } else {
        if (markDates[fechaSeleccionada]) {
          console.log("esta es la fecha cita:", markDates[fechaSeleccionada]);
          const citasParaFecha = markDates[fechaSeleccionada];
          const ids = citasParaFecha.dots.map((dot) => dot.key);
          try {
            const token = userToken;
            console.log(token);
            const peticionesCitas = ids.map((id) => obtener_cita_id(id, token));
            const respuestas = await Promise.all(peticionesCitas);
            // console.log('Respuestas de las citas',respuestas)
            const datosCitas = respuestas.map((res) => res.data.data);
            const citasAgendadasFil = datosCitas.map((citaF) => ({
              idCita: citaF._id,
              start: citaF.start,
              end: citaF.end,
              registroMedico: citaF.registroMedico,
              nombrePaciente: citaF.idPaciente.nombre,
              apellidoPaciente: citaF.idPaciente.apellido,
              emailPaciente: citaF.idPaciente.email,
              nombreDoctor: citaF.idDoctor.nombre,
              apellidoDoctor: citaF.idDoctor.apellido,
            }));
            console.log(
              "estas son las citas agendadas filtradas: ",
              citasAgendadasFil
            );
            setdetallesCitas(citasAgendadasFil);
          } catch (error) {
            console.error("Error al hacer peticiones a la API: ", error);
          }
        } else {
          guardarMensaje("No tienes una cita agendada ese día");
          mostrarAlerta(true);
        }
      }
    } catch (error) {
      console.log(error)
    }finally{
      setloadDetalle(false)
    }
  };

  return (
    <CitasContext.Provider
      value={{
        obtenerCitas,
        loadingCalendar,
        setLoadingCalendar,
        obtenerCitasPendientes,
        obtenerCitasRealizadas,
        obtenerCitasCanceladas,
        obtenerCitasFecha,
        citasRealizadas,
        citasPendientes,
        citasCanceladas,
        markDates,
        tipoCita,
        detallesCitas,
        loadDetalle
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

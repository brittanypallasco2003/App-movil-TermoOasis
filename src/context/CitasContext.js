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
  eliminarCita,
  obtener_registro_id,
} from "../api/api_citas";
import { obtenerTokenStorage } from "../storage/storage";
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
  const [loadBotonCancel, setloadBotonCancel] = useState(false);
  const [mostrarAlertaCancelar, setmostrarAlertaCancelar] = useState(false);
  const [idCitaCancelar, setIdCitaCancelar] = useState("");
  const [citaCancelada, setcitaCancelada] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [citasPendPacienteEsp, setcitasPendPacienteEsp] = useState([]);
  const [citasReaPacienteEsp, setcitasReaPacienteEsp] = useState([]);
  const [citasCanPacienteEsp, setcitasCanPacienteEsp] = useState([]);
  const [detalleRegistro, setDetalleRegistro] = useState({});
  const [recetaRegistro, setrecetaRegitsro] = useState([]);
  const [cargandoRegistro, setcargandoRegistro] = useState(false);
  const {
    guardarMensaje,
    mostrarAlerta,
    isLoggedIn,
    infoUsuariObtenida,
    userToken,
  } = useContext(AuthContext);

  const { _id, isDoctor, isPaciente, isSecre } = infoUsuariObtenida;

  useEffect(() => {
    setCitasCanceladas([]);
    setCitasPendientes([]);
    setCitasRealizadas([]);
    setMarkdates({});
    settipoCita("");
    setdetallesCitas([]);
    setSearchVisible(false);
    setcitaCancelada(false);
    setDetalleRegistro({})
    setrecetaRegitsro([])
  }, [isLoggedIn]);

  useEffect(() => {
    setdetallesCitas([]);
  }, [tipoCita]);

  useEffect(() => {
    setSearchResults([]);
  }, [searchVisible]);

  //cada vez que se marquen de nuevo las fechas se quitan las tarjetas de info cita
  useEffect(() => {
    setdetallesCitas([]);
  }, [markDates]);

  const obtenerCitas = async () => {
    try {
      setLoadingCalendar(true);
      const tokenStorage = await obtenerTokenStorage();

      const response = await obtener_todas_citas(
        tokenStorage,
        isSecre,
        isDoctor,
        isPaciente
      );
      if (response && response.data) {
        const citas = response.data.data;
        const citasFormateadas = citas.map((citaFormateada) => ({
          idCita: citaFormateada._id,
          start: new Date(citaFormateada.start),
          end: new Date(citaFormateada.end),
          idPaciente: citaFormateada.idPaciente._id,
          cedulaPaciente: citaFormateada.idPaciente.cedula,
          nombrePaciente: citaFormateada.idPaciente.nombre,
          apellidoPaciente: citaFormateada.idPaciente.apellido,
          idDoctor: citaFormateada.idDoctor,
          citaCancelada: citaFormateada.isCancelado,
        }));
        console.log("esta es la respuesta de las citas: ", citasFormateadas);
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
      console.log("función CITAS PACIENTE");
      setLoadingCalendar(true);
      const tokenStorage = await obtenerTokenStorage();
      const response = await obtener_citas_paciente_especifico(
        tokenStorage,
        id,
        isSecre,
        isDoctor,
        isPaciente
      );
      if (response && response.data) {
        const citas = response.data.data;

        console.log(
          "estas ES LA RESPUESTA DE LAS CITAS DE UN PACIENTE ESPECÍFICO: ",
          citas
        );
        const citasFormtP = citas.map((citaFormateada) => ({
          idCita: citaFormateada._id,
          start: citaFormateada.start,
          end: citaFormateada.end,
          idPaciente: citaFormateada.idPaciente._id,
          nombrePaciente: citaFormateada.idPaciente.nombre,
          nombreDoctor: citaFormateada.idDoctor.nombre,
          apellidoDoctor: citaFormateada.idDoctor.apellido,
          citaCancelada: citaFormateada.isCancelado,
        }));
        console.log(
          "esta es la respuesta de las citas todas, antes de su tipo: ",
          citasFormtP
        );
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

  const obtenerCitasPendientes = useCallback(
    async (idP = null) => {
      try {
        setLoadingCalendar(true);
        let citas;
        if (isDoctor) {
          console.log("soy doctor: ", isDoctor);
          citas = idP ? await obtenerCitasPaciente(idP) : await obtenerCitas();
        } else {
          console.log("soy paciente");
          citas = await obtenerCitasPaciente(_id);
        }

        const fechaHoy = new Date();

        const citasPendientes = citas.filter(
          (citasP) => new Date(citasP.start) > fechaHoy && !citasP.citaCancelada
        );
        console.log("estas son las citas pendientes", citasPendientes);

        idP
          ? setcitasPendPacienteEsp(citasPendientes)
          : setCitasPendientes(citasPendientes);

        const fechasMarcadas = marcarFechas(citasPendientes);
        console.log("fecha pendiente marcada: ", fechasMarcadas);
        setMarkdates(fechasMarcadas);
        settipoCita("Pendientes");
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCalendar(false);
      }
    },
    [isDoctor, _id]
  );

  const obtenerCitasRealizadas = useCallback(
    async (idP = null) => {
      try {
        setLoadingCalendar(true);
        let citas;
        if (isDoctor) {
          console.log("soy doctor: ", isDoctor);
          citas = idP ? await obtenerCitasPaciente(idP) : await obtenerCitas();
        } else {
          console.log("soy paciente");
          citas = await obtenerCitasPaciente(_id);
        }

        const fechaHoy = new Date();
        const citasRealizadas = citas.filter(
          (citasR) => new Date(citasR.end) < fechaHoy && !citasR.citaCancelada
        );
        console.log("estas son las citas realizadas", citasRealizadas);
        idP
          ? setcitasReaPacienteEsp(citasRealizadas)
          : setCitasRealizadas(citasRealizadas);

        const fechasMarcadas = marcarFechas(citasRealizadas);
        setMarkdates(fechasMarcadas);
        settipoCita("Realizadas");
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCalendar(false);
      }
    },
    [isDoctor, _id]
  );

  const obtenerCitasCanceladas = useCallback(
    async (idP = null) => {
      try {
        setLoadingCalendar(true);
        let citas;
        if (isDoctor) {
          console.log("soy doctor: ", isDoctor);
          citas = idP ? await obtenerCitasPaciente(idP) : await obtenerCitas();
        } else {
          console.log("soy paciente");
          citas = await obtenerCitasPaciente(_id);
        }
        const citasCanceladas = citas.filter((citasC) => citasC.citaCancelada);
        console.log("estas son las citas canceladas: ", citasCanceladas);

        idP
          ? setcitasCanPacienteEsp(citasCanceladas)
          : setCitasCanceladas(citasCanceladas);
        const fechasMarcadas = marcarFechas(citasCanceladas);
        setMarkdates(fechasMarcadas);
        settipoCita("Canceladas");
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCalendar(false);
      }
    },
    [isDoctor, _id]
  );

  const marcarFechas = (citas) => {
    return citas.reduce((acc, cita) => {
      const date = new Date(cita.start);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      if (acc[formattedDate]) {
        acc[formattedDate].dots.push({ key: cita.idCita, color: "#F27F1B" });
      } else {
        acc[formattedDate] = { dots: [{ key: cita.idCita, color: "#F27F1B" }] };
      }
      return acc;
    }, {});
  };

  const obtenerCitasFecha = async (fechaSeleccionada) => {
    try {
      setloadDetalle(true);
      setdetallesCitas([]);
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
            const peticionesCitas = ids.map((id) =>
              obtener_cita_id(id, token, isPaciente, isDoctor, isSecre)
            );
            const respuestas = await Promise.all(peticionesCitas);
            // console.log('Respuestas de las citas',respuestas)
            const datosCitas = respuestas.map((res) => res.data.data);
            console.log("estos son datos citas ", datosCitas);
            const citasAgendadasFil = datosCitas.map((citaF) => ({
              idCita: citaF._id,
              start: citaF.start,
              end: citaF.end,
              isCancel: citaF.isCancelado,
              registroMedico: citaF.registroMedico,
              nombrePaciente: citaF.idPaciente.nombre,
              apellidoPaciente: citaF.idPaciente.apellido,
              cedulaPaciente: citaF.idPaciente.cedula,
              telefonoPaciente: citaF.idPaciente.telefono,
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
            guardarMensaje(
              "Lo sentimos, no puedes ver el detalle de tu cita, inténtalo más tarde"
            );
            mostrarAlerta(true);
          }
        } else {
          guardarMensaje("No tienes una cita agendada ese día");
          mostrarAlerta(true);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloadDetalle(false);
    }
  };

  const cancelarCita = async (id) => {
    try {
      setloadBotonCancel(true);
      const token = userToken;
      const response = await eliminarCita(id, token);
      if (response && response.data) {
        guardarMensaje(response.data.msg);
        setcitaCancelada(true);
        // const nuevasDetallesCitas = detallesCitas.filter(
        //   (cita) => cita.idCita !== id
        // );
        // setdetallesCitas(nuevasDetallesCitas);

        const citaPendientesAct = citasPendientes.filter(
          (cita) => cita.idCita !== id
        );
        setCitasPendientes(citaPendientesAct);

        const nuevasFechasMarcadas = { ...markDates };
        Object.keys(nuevasFechasMarcadas).forEach((fecha) => {
          nuevasFechasMarcadas[fecha].dots = nuevasFechasMarcadas[
            fecha
          ].dots.filter((dot) => dot.key !== id);
          if (nuevasFechasMarcadas[fecha].dots.length === 0) {
            delete nuevasFechasMarcadas[fecha];
          }
        });
        setMarkdates(nuevasFechasMarcadas);
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      guardarMensaje(error.response.data.msg);
    } finally {
      setloadBotonCancel(false);
      setmostrarAlertaCancelar(false);
      mostrarAlerta(true);
    }
  };

  const buscarPacientes = (consulta) => {
    if (consulta && consulta.length > 0) {
      console.log("esta es la consulta del buscador: ", consulta);
      if (tipoCita === "") {
        guardarMensaje("Debes seleccionar un tipo de cita primero");
        mostrarAlerta(true);
        return;
      } else if (tipoCita === "Pendientes") {
        const resPendientes = citasPendientes.filter(
          (cita) =>
            cita.cedulaPaciente
              ?.toLowerCase()
              .includes(consulta.toLowerCase()) ||
            cita.nombrePaciente?.toLowerCase().includes(consulta.toLowerCase())
        );
        const uniquePaciente = resPendientes.reduce((unique, cita) => {
          return unique.some(
            (uniqueCita) => uniqueCita.idPaciente === cita.idPaciente
          )
            ? unique
            : [...unique, cita];
        }, []);
        setSearchResults(uniquePaciente);
        console.log(
          "Estos son los resultados de las citas pendientes: ",
          uniquePaciente
        );
        return;
      } else if (tipoCita === "Realizadas") {
        const resRealizadas = citasRealizadas.filter(
          (cita) =>
            cita.cedulaPaciente
              ?.toLowerCase()
              .includes(consulta.toLowerCase()) ||
            cita.nombrePaciente?.toLowerCase().includes(consulta.toLowerCase())
        );
        const uniquePaciente = resRealizadas.reduce((unique, cita) => {
          return unique.some(
            (uniqueCita) => uniqueCita.idPaciente === cita.idPaciente
          )
            ? unique
            : [...unique, cita];
        }, []);
        setSearchResults(uniquePaciente);
        console.log(
          "Estos son los resultados de las citas realizadas DEL BUSCADOR: ",
          uniquePaciente
        );
        return;
      } else if (tipoCita === "Canceladas") {
        const resCanceladas = citasCanceladas.filter(
          (cita) =>
            cita.cedulaPaciente
              ?.toLowerCase()
              .includes(consulta.toLowerCase()) ||
            cita.nombrePaciente?.toLowerCase().includes(consulta.toLowerCase())
        );
        const uniquePaciente = resCanceladas.reduce((unique, cita) => {
          return unique.some(
            (uniqueCita) => uniqueCita.idPaciente === cita.idPaciente
          )
            ? unique
            : [...unique, cita];
        }, []);
        setSearchResults(uniquePaciente);
        console.log(
          "Estos son los resultados de las citas canceladas: ",
          uniquePaciente
        );
        return;
      }
    } else {
      setSearchResults([]);
    }
  };

  const buscarCitasPaciente = async (idP) => {
    if (idP) {
      if (tipoCita === "Pendientes") {
        await obtenerCitasPendientes(idP);
        setSearchResults([]);
        setSearchVisible(false);
      } else if (tipoCita === "Realizadas") {
        await obtenerCitasRealizadas(idP);
        setSearchResults([]);
        setSearchVisible(false);
      } else if (tipoCita === "Canceladas") {
        await obtenerCitasCanceladas(idP);
        setSearchResults([]);
        setSearchVisible(false);
      }
    }
  };

  const obtenerRegistroMedico = async (id_Cita) => {
    try {
      setcargandoRegistro(true);
      const token = userToken;
      const response = await obtener_registro_id(id_Cita, token, isDoctor);
      if (response && response.data) {
        const registroMedico = response.data.data;
        console.log(registroMedico);
        const receta = registroMedico.receta;
        console.log('mi receta: ',receta)
        setDetalleRegistro(registroMedico);
        setrecetaRegitsro(receta)

      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      console.log(error.response?.data?.msg);
      return [];
    } finally {
      setcargandoRegistro(false);
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
        loadDetalle,
        cancelarCita,
        loadBotonCancel,
        setmostrarAlertaCancelar,
        mostrarAlertaCancelar,
        idCitaCancelar,
        setIdCitaCancelar,
        citaCancelada,
        searchVisible,
        setSearchVisible,
        buscarPacientes,
        searchResults,
        setSearchResults,
        buscarCitasPaciente,
        setcitaCancelada,
        obtenerRegistroMedico,
        detalleRegistro,
        cargandoRegistro,
        recetaRegistro
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  obtener_citas_paciente_especifico,
  obtener_todas_citas,
} from "../api/api_citas";
import {
  guardarCitasStorage,
  obtenerCitasStorage,
  obtenerTokenStorage,
} from "../model/storage";
import { AuthContext } from "./AuthContext";

export const CitasContext = createContext();

export const CitasProvider = ({ children }) => {
  const [markDates, setMarkdates] = useState({});
  const [loadingCalendar, setLoadingCalendar] = useState(false);
  // const [citasApiDoctor, realizarConsultaApiDoctor] = useState(false);
  // const [citasApiPaciente, realizarConsultaApiPaciente] = useState(false);
  const [citasRealizadas, setCitasRealizadas] = useState([]);
  const [citasCanceladas, setCitasCanceladas] = useState([]);
  const [citasPendientes, setCitasPendientes] = useState([]);
  const [tipoCita, settipoCita] = useState("");

  const { guardarMensaje, mostrarAlerta, isLoggedIn, infoUsuariObtenida } =
    useContext(AuthContext);

  const { _id, isDoctor, isPaciente } = infoUsuariObtenida;

  // useEffect(() => {
  //   if (citasApiDoctor) {
  //     obtenerCitas();
  //   }
  // }, [citasApiDoctor]);

  // useEffect(() => {
  //   if (citasApiPaciente) {
  //     obtenerCitasPaciente(_id);
  //   }
  // }, [citasApiPaciente]);

  useEffect(() => {
    setCitasCanceladas([]);
    setCitasPendientes([]);
    setCitasRealizadas([]);
    setMarkdates({});
    settipoCita("");
  }, [isLoggedIn]);

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
        citas=await obtenerCitas()
      } else {
        console.log("soy paciente");
        citas=await obtenerCitasPaciente(_id)
      }

      const fechaHoy=new Date()
      const citasPendientes=citas.filter(
        (citasP) => new Date(citasP.start)>fechaHoy && !citasP.citaCancelada
      )
      console.log('estas son las citas pendientes',citasPendientes)
      setCitasPendientes(citasPendientes)
      const fechasMarcadas=marcarFechas(citasPendientes)
      setMarkdates(fechasMarcadas)
      settipoCita("Pendientes")

      // const citasStorage = await obtenerCitasStorage();
      // const citas = JSON.parse(citasStorage);
      // if (citas) {
      //   const fechaHoy = new Date();
      //   const citasPendientes = citas.filter(
      //     (citasP) => new Date(citasP.start) > fechaHoy && !citasP.citaCancelada
      //   );
      //   console.log("estas son las citasPendientes", citasPendientes);
      //   setCitasPendientes(citasPendientes);
      //   const fechasMarcadas = marcarFechas(citasPendientes);
      //   setMarkdates(fechasMarcadas);
      //   settipoCita("Pendientes");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  }, [isDoctor,_id]);

  const obtenerCitasRealizadas = useCallback(async () => {
    try {
      setLoadingCalendar(true);
      let citas;
      if (isDoctor) {
        console.log("soy doctor: ", isDoctor);
        citas=await obtenerCitas()
      } else {
        console.log("soy paciente");
        citas=await obtenerCitasPaciente(_id)
      }
      
        const fechaHoy = new Date();
        const citasRealizadas = citas.filter((citasR) => new Date(citasR.start)< fechaHoy && !citasR.citaCancelada);

        console.log("estas son las citas realizadas", citasRealizadas);
        setCitasRealizadas(citasRealizadas);
        const fechasMarcadas = marcarFechas(citasRealizadas);
        setMarkdates(fechasMarcadas);
        settipoCita("Realizadas");
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  },[isDoctor,_id])

  const obtenerCitasCanceladas = async () => {
    try {
      setLoadingCalendar(true);
      realizarConsultaApiDoctor(true);
      const citasStorage = await obtenerCitasStorage();
      const citas = JSON.parse(citasStorage);
      if (citas) {
        const citasCanceladas = citas.filter((citasC) => citasC.citaCancelada);
        console.log("estas son las citas canceladas: ", citasCanceladas);
        setCitasCanceladas(citasCanceladas);
        const fechasMarcadas = marcarFechas(citasCanceladas);
        // const markdates = citasCanceladas.reduce((acc, cita) => {
        //   const date = new Date(cita.start).toISOString().split("T")[0];
        //   if(acc[date]){
        //     acc[date].dots.push({ key:cita.idCita, color:'blue'})
        //   }else{
        //     acc[date]={dots:[{key:cita.idCita,color:'blue'}]}
        //   }
        //   return acc;
        // }, {});
        setMarkdates(fechasMarcadas);
        settipoCita("Canceladas");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  };

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

  const obtenerCitasFecha = (fechaSeleccionada) => {
    if (
      fechaSeleccionada &&
      Object.keys(markDates).length === 0 &&
      citasRealizadas.length === 0 &&
      citasPendientes.length === 0 &&
      citasCanceladas.length === 0
    ) {
      guardarMensaje(
        "Lo sentimos, primero debes seleccionar el tipo de cita que quieras visualizar"
      );
      mostrarAlerta(true);
    } else {
      console.log("si hay citas pendientes en el state: ", citasPendientes);
      const fechacita = new Date(fechaSeleccionada);
      console.log("esta es la fecha cita:", fechacita);
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
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

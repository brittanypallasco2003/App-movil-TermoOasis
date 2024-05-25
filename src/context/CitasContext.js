import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { obtener_todas_citas } from "../api/api_citas";
import { guardarCitasStorage, obtenerCitasStorage } from "../model/storage";

export const CitasContext = createContext();
export const CitasProvider = ({ children }) => {
  const [citasState, guardarCitas] = useState([]);
  const [loadingCalendar, setLoadingCalendar] = useState(false);
  const [markedDates, setMarkdates] = useState({});

  const obtenerCitas = async () => {
    try {
      setLoadingCalendar(true)
      const tokenStorage = await AsyncStorage.getItem("userToken");
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
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      console.log(error.response?.data?.msg);
    }
  };

  const obtenerCitasPendientes = async () => {
    try {
      await obtenerCitas();
      const citasStorage = await obtenerCitasStorage()
      const citas = JSON.parse(citasStorage);
      if (citas) {
        const fechaHoy = new Date();
        const citasPendientes = citas.filter((citasP) => {
          const fechacita = new Date(citasP.start);
          return fechacita > fechaHoy;
        });

        console.log("estas son las citasPendientes", citasPendientes);
        guardarCitas(citasPendientes);
        const markdates = citasPendientes.reduce((acc, cita) => {
          const date = new Date(cita.start).toISOString().split("T")[0];
          if(acc[date]){
            acc[date].dots.push({ key:cita.idCita, color:'blue'}) 
          }else{
            acc[date]={dots:[{key:cita.idCita,color:'blue'}]}
          }
          return acc;
        }, {});
        setMarkdates(markdates);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  };

  const obtenerCitasRealizadas = async () => {
    try {
      
      await obtenerCitas();
      const citasStorage = await obtenerCitasStorage()
      const citas = JSON.parse(citasStorage);
      if (citas) {
        const fechaHoy = new Date();
        const citasRealizadas = citas.filter((citasR) => {
          const fechacita = new Date(citasR.start);
          return fechaHoy > fechacita;
        });

        console.log("estas son las citas realizadas", citasRealizadas);
        guardarCitas(citasRealizadas);
        const markdates = citasRealizadas.reduce((acc, cita) => {
          const date = new Date(cita.start).toISOString().split("T")[0];
          if(acc[date]){
            acc[date].dots.push({ key:cita.idCita, color:'blue'}) 
          }else{
            acc[date]={dots:[{key:cita.idCita,color:'blue'}]}
          }
          return acc;
        }, {});
        setMarkdates(markdates);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCalendar(false);
    }
  };

  const obtenerCitasCanceladas = async () => {
    try {
      await obtenerCitas();
      const citasStorage = await obtenerCitasStorage()
      const citas = JSON.parse(citasStorage);
      if (citas) {
        const citasCanceladas = citas.filter((citasC) => {
          return citasC.isCancelado===true;
        });
        console.log('estas son las citas canceladas: ',citasCanceladas)
        guardarCitas(citasCanceladas)
        const markdates = citasCanceladas.reduce((acc, cita) => {
          const date = new Date(cita.start).toISOString().split("T")[0];
          if(acc[date]){
            acc[date].dots.push({ key:cita.idCita, color:'blue'}) 
          }else{
            acc[date]={dots:[{key:cita.idCita,color:'blue'}]}
          }
          return acc;
        }, {});
        setMarkdates(markdates);
      }

    } catch (error) {
      console.log(error);
    }finally{
      setLoadingCalendar(false)
    }
  };

  const obtenerCitasFecha = (fechaSeleccionada) => {
    if(fechaSeleccionada){
      const fechacita=new Date(fechaSeleccionada)
      console.log('esta es la fecha cita:',fechacita)
    }
  }
  

  return (
    <CitasContext.Provider
      value={{
        obtenerCitas,
        citasState,
        loadingCalendar,
        setLoadingCalendar,
        obtenerCitasPendientes,
        markedDates,
        obtenerCitasRealizadas,
        obtenerCitasCanceladas,
        obtenerCitasFecha
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

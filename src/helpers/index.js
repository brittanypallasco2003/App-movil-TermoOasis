export const formatearFecha = (fechaFormatear) => {
  const nuevaFecha = new Date(fechaFormatear);

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return nuevaFecha.toLocaleDateString("es-Es", opciones);
};

export const formatearFechaHora = (fechaFormatear) => {
    const fehaHora=new Date(fechaFormatear)
  let horas = fehaHora.getHours().toString().padStart(2, "0");
  const minutes = fehaHora.getMinutes().toString().padStart(2, "0");
  const amPm=horas>=12? 'PM':'AM'
  horas=horas%12
  horas=horas?horas:12// la hora 0 debe ser 12
  const horaCita=horas.toString().padStart(2,0)
  //FORMATEAR HORA AM/PM
  const horarioCita = `${horaCita}:${minutes} ${amPm}`;
  return horarioCita
};


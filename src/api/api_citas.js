import axiosInstance from "./axiosConfig";

export const obtener_todas_citas = async (token) => {
  try {
    const res = await axiosInstance.get("/citas/mostrar-todas",{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error("Error en la respuesta de la API:", error.response.data);
    } else if (error.request) {
      console.error("No se recibió respuesta de la API:", error.request);
    } else {
      console.error(
        "Error en la configuración de la solicitud:",
        error.message
      );
    }
    throw error; // Re-lanzar el error para que sea manejado en la llamada
  }
};

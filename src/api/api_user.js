import axiosInstance from './axiosConfig'

export const user_login = async (email, password) => {
  try {
    const res = await axiosInstance.post('/login', { email, password });
    return res;
  } catch (error) {
    if (error.response) {
      console.error('Error en la respuesta de la API:', error.response.data);
    } else if (error.request) {
      console.error('No se recibió respuesta de la API:', error.request);
    } else {
      console.error('Error en la configuración de la solicitud:', error.message);
    }
    throw error; // Re-lanzar el error para que sea manejado en la llamada
  }
};

export const user_restablecer = async (nombre, apellido, email) => {
  try {
    const res = await axiosInstance.post('/recuperar-password-movil', { nombre, apellido,email });
    return res;
  } catch (error) {
    if (error.response) {
      console.error('Error en la respuesta de la API:', error.response.data);
    } else if (error.request) {
      console.error('No se recibió respuesta de la API:', error.request);
    } else {
      console.error('Error en la configuración de la solicitud:', error.message);
    }
    throw error; // Re-lanzar el error para que sea manejado en la llamada
  }
};

import axios from "axios";
import axiosInstance from './axiosConfig'

export const user_login = async (email, contraseña) => {
  try {
    const res = await axiosInstance.post('/login', { email, contraseña });
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
  console.log(nombre, apellido, email);
  return axios.post(
    `https://backend-termo-oasis.vercel.app/api/recuperar-password-movil`,
    { nombre, apellido, email }
  );
};

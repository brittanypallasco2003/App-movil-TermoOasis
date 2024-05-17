import axios from "axios";

export const user_login = async (email, contraseña) => {
  return axios.post(`https://backend-termo-oasis.vercel.app/api/login`, {email,contraseña});
};

export const user_restablecer = async (nombre, apellido) => {
  return axios.post(`https://backend-termo-oasis.vercel.app/api/recuperar-password-movil`, { nombre, apellido });
};

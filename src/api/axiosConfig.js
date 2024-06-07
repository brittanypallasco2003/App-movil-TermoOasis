import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-termo-oasis.vercel.app/api',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitudes para añadir logs
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`Enviando solicitud a ${config.url} con datos:`, config.data);
    return config;
  },
  (error) => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }
);


// Interceptor para reintentar en caso de fallos temporales
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const { config, response: { status } } = error;
    if (status >= 500 && config && !config.__isRetryRequest) {
      config.__isRetryRequest = true;
      return axiosInstance(config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

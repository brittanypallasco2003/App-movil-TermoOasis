import axiosInstance from "./axiosConfig";

export const obtener_todas_citas = async (token, isSecre, isDoctor, isPaciente) => {
  // console.log('en la api:',token)
  try {
    const res = await axiosInstance.get("/citas/mostrar-todas", {
      headers: {
        Authorization: `Bearer ${token}`,
        'isSecre': isSecre.toString(),
        'isDoctor': isDoctor.toString(),
        'isPaciente': isPaciente.toString()
      },
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

export const obtener_citas_paciente_especifico = async (token, id, isSecre, isDoctor, isPaciente) => {
  // console.log('en la api:',token)
  try {
    const res = await axiosInstance.get(`/citas/mostrar-por-paciente/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'isSecre': isSecre.toString(),
        'isDoctor': isDoctor.toString(),
        'isPaciente': isPaciente.toString()
      },
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error("Error en la respuesta de la API:", error.response.data);
    } else if (error.request) {
      console.log("No se recibió respuesta de la API:", error.request);
    } else {
      console.error(
        "Error en la configuración de la solicitud:",
        error.message
      );
    }
    throw error; // Re-lanzar el error para que sea manejado en la llamada
  }
};

export const obtener_cita_id = async (id, token, isPaciente, isDoctor,isSecre) => {
  try {
    const res = await axiosInstance.get(`/citas/mostrar/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'isSecre': isSecre.toString(),
        'isDoctor': isDoctor.toString(),
        'isPaciente': isPaciente.toString()
      },
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error("Error en la respuesta de la API:", error.response.data);
    } else if (error.request) {
      console.log("No se recibió respuesta de la API:", error.request);
    } else {
      console.error(
        "Error en la configuración de la solicitud:",
        error.message
      );
    }
    throw error; 
  }
};

export const eliminarCita = async (id, token) => {
  try {
    const res = await axiosInstance.post(`/citas/cancelar/${id}`,{},{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error("Error en la respuesta de la API:", error.response.data);
    } else if (error.request) {
      console.log("No se recibió respuesta de la API:", error.request);
    } else {
      console.error(
        "Error en la configuración de la solicitud:",
        error.message
      );
    }
    throw error;
  }
};


export const obtener_registro_id = async (id, token, isDoctor) => {
  try {
    const res = await axiosInstance.get(`/registroMedico/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'isDoctor': isDoctor.toString(),
      },
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error("Error en la respuesta de la API:", error.response.data);
    } else if (error.request) {
      console.log("No se recibió respuesta de la API:", error.request);
    } else {
      console.error(
        "Error en la configuración de la solicitud:",
        error.message
      );
    }
    throw error; 
  }
};
 export const verificarCorreoIngresado = (textoIngresado) => {
    let re = /\S+@\S+\.\S+/;
    //si el correo no cumple con el formato salta la alerta
    if (!re.test(textoIngresado)) {
      guardarMensaje("Formato de correo Inválido");
      mostrarAlerta(true);
      return true;
    }
  };

 export const validarNombre = (name) => {
    var re = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\u2000-\u200B]{3,}$/    ;
    if (!re.test(name)) {
      guardarMensaje("El dato ingresado no es un nombre");
      mostrarAlerta(true);
      return true;
    }
  };

export const validarApellido = (lastname) => {
    var re = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\u2000-\u200B]{3,}$/;
    if (!re.test(lastname)) {
      guardarMensaje("El dato ingresado no es un apellido");
      mostrarAlerta(true);
      return true;
    }
  };


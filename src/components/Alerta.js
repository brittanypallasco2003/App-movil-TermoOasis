import { View, Text, Alert } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  useTheme,
} from "react-native-paper";
import globalStyles from "../styles/global";

const Alerta = () => {

  const { mensajeError, alerta, mostrarAlerta, passwordCambiado,mostrarMensajePassword } =
    useContext(AuthContext);
  return (
    <Portal>
      {/* con onDismiss se puede cerrar la ventana de alerta si se presiona fuera de ella */}
      <Dialog
        visible={alerta}
        onDismiss={() => mostrarAlerta(false)}
        style={[globalStyles.cuadroAlerta]}
      >
        <Dialog.Title>
          {passwordCambiado ? "Recuperación de Cuenta Exitosa" : "Error"}
        </Dialog.Title>
        <Dialog.Content>
          <Paragraph>{mensajeError}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          {/* al cambiar la visibilidad de la alerta a false, se oculta o se cierra */}
          <Button onPress={() => {mostrarAlerta(false)
            mostrarMensajePassword(false)
          }}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Alerta;

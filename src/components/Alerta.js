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
import { Text } from "react-native";
import { CitasContext } from "../context/CitasContext";
import { scale } from "react-native-size-matters";

const Alerta = () => {
  const {
    mensajeError,
    alerta,
    mostrarAlerta,
    passwordCambiado,
    mostrarMensajePassword,
  } = useContext(AuthContext);
  const { citaCancelada } = useContext(CitasContext);
  const theme=useTheme()
  return (
    <Portal>
      {/* con onDismiss se puede cerrar la ventana de alerta si se presiona fuera de ella */}
      <Dialog
        visible={alerta}
        onDismiss={() => mostrarAlerta(false)}
        style={[globalStyles.cuadroAlerta]}
      >
        <Dialog.Icon
          icon={passwordCambiado
            ? "account-check"
            : citaCancelada
            ? "check-circle"
            : "alert-circle"}
          size={scale(40)}
          color={theme.colors.primary}
        />
        <Dialog.Title style={globalStyles.titleAlert}>
          {passwordCambiado
            ? "Recuperación de Cuenta Exitosa"
            : citaCancelada
            ? "Cita Cancelada"
            : "Error"}
        </Dialog.Title>
        <Dialog.Content>
          <Text style={globalStyles.contentAlert}>{mensajeError}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          {/* al cambiar la visibilidad de la alerta a false, se oculta o se cierra */}
          <Button
            labelStyle={globalStyles.botonAlert}
            onPress={() => {
              mostrarAlerta(false);
              mostrarMensajePassword(false);
            }}
          >
            Entendido
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Alerta;

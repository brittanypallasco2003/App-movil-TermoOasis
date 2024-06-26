import React, { useContext } from "react";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";
import { moderateScale, scale } from "react-native-size-matters";

const AlertaCancelar = () => {
  const {
    setmostrarAlertaCancelar,
    mostrarAlertaCancelar,
    cancelarCita,
    idCitaCancelar,
    loadBotonCancel
  } = useContext(CitasContext);
  const theme = useTheme();
  return (
    <Portal>
      {/* con onDismiss se puede cerrar la ventana de alerta si se presiona fuera de ella */}
      <Dialog
        visible={mostrarAlertaCancelar}
        onDismiss={() => setmostrarAlertaCancelar(false)}
        style={[globalStyles.cuadroAlerta]}
      >
        <Dialog.Icon
          icon="alert-circle"
          size={scale(30)}
          color={theme.colors.primary}
        />
        <Dialog.Title style={globalStyles.titleAlert}>
          ¿Cancelar Cita?
        </Dialog.Title>
        <Dialog.Content>
          <Text style={[globalStyles.contentAlert,{textAlign:'center'}]}>
            ¿Deseas cancelar esta cita? Esta acción es irreversible
          </Text>
        </Dialog.Content>
        <Dialog.Actions style={{flexGrow:1, flexDirection:'row', justifyContent:'space-evenly',
        }}>
          {/* al cambiar la visibilidad de la alerta a false, se oculta o se cierra */}
          <Button
            labelStyle={globalStyles.botonAlert}
            onPress={() => setmostrarAlertaCancelar(false)}
          >
            Cancelar 
          </Button>
          <Button
            labelStyle={globalStyles.botonAlert}
            onPress={() => cancelarCita(idCitaCancelar)}
            loading={loadBotonCancel}
          >
            Sí, cancelar
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlertaCancelar;

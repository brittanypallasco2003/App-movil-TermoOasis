import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Modal, Portal, ActivityIndicator, useTheme } from "react-native-paper";

import { CitasContext } from "../context/CitasContext";
import { moderateScale, scale } from "react-native-size-matters";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const CargandoDatosComp = () => {
  const { loadingCalendar, cargandoRegistro } = useContext(CitasContext);
  const theme=useTheme()
  return (
    <Portal>
      <Modal
        visible={loadingCalendar || cargandoRegistro}
        contentContainerStyle={styles.modalContainer}
      >
        <ActivityIndicator
          animating={true}
          color={loadingCalendar? theme.colors.primary:theme.colors.secondary}
          size={isTablet ? scale(30) : scale(40)}
        />
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    padding: moderateScale(30),
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    width: isTablet ? "30%" : "40%",
  },
});

export default CargandoDatosComp;

import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Modal, Portal, ActivityIndicator } from 'react-native-paper';

import { CitasContext } from '../context/CitasContext';
import { moderateScale, scale } from 'react-native-size-matters';
import { RegistrosContext } from '../context/RegistrosContext';
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const LoadCalendarioCitas = () => {
    const  loadingCalendar= useContext(CitasContext)
    const cargandoRegistros=useContext(RegistrosContext)
  return (  
        <Portal>
          <Modal visible={loadingCalendar || cargandoRegistros} contentContainerStyle={styles.modalContainer}>
            <ActivityIndicator animating={true} size={isTablet?scale(30):scale(40)} />
          </Modal>
        </Portal>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: '#fff',
      padding: moderateScale(30),
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius: moderateScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      width: isTablet?'30%':'40%'
    },
  });

export default LoadCalendarioCitas;

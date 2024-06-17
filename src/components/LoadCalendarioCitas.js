import React, { useContext, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Modal, Portal, ActivityIndicator, Button, Provider } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { CitasContext } from '../context/CitasContext';
import { moderateScale, scale } from 'react-native-size-matters';
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const LoadCalendarioCitas = () => {
    const  loadingCalendar= useContext(CitasContext)
  return (  
        <Portal>
          <Modal visible={loadingCalendar} contentContainerStyle={styles.modalContainer}>
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

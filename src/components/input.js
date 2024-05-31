import React from 'react';
import { TextInput } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const CustomTextInput = ({ label, ...rest }) => {
  return (
    <TextInput
      label={label}
      {...rest}
      style={styles.input}
      theme={{
        fonts: {
          regular: {
            fontSize: scale(20), // Ajusta el tamaño de la fuente del label
          },
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});

export default CustomTextInput;

import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { CitasContext } from "../context/CitasContext";
import {
  IconButton,
  List,
  useTheme,
} from "react-native-paper";
import globalStyles from "../styles/global";
import { moderateScale, scale } from "react-native-size-matters";
const { width } = Dimensions.get("window");

const ListaPacientes = ({ item }) => {
  const { buscarCitasPaciente } = useContext(CitasContext);
  const theme = useTheme();
  const isTablet = width >= 768;

  const { apellidoPaciente, nombrePaciente, idPaciente,cedulaPaciente } = item;

  return (
    // <View style={{ flex: 1, padding: 20 }}>
    //      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
    //   <Text style={{ fontSize: 16, fontWeight: "bold" }}>
    //     {nombrePaciente} {apellidoPaciente}  {idPaciente}
    //   </Text>

    //      </View>
    // </View>
    <List.Section
    // title="Resultados..." NO DESCOMENTAR, se renderiza esto por cada paciente, no una sola vez
    // titleStyle={globalStyles.titleStyleListResult}
    >
      <List.Item
        title={`${nombrePaciente} ${apellidoPaciente}`}
        description={`${cedulaPaciente}`}
        style={{ borderBottomWidth: moderateScale(1) }}
        //onLongPress={() => buscarCitasPaciente(idPaciente)}
        titleStyle={globalStyles.titleStListItem}
        descriptionStyle={globalStyles.descripListItem}
        // right={() => ( <ActivityIndicator animating={true} color='red' />)}
        right={() => (
          <IconButton
            mode="outlined"
            icon="calendar-search"
            iconColor={theme.colors.primary}
            size={isTablet ? scale(13) : scale(18)}
            onPress={() => buscarCitasPaciente(idPaciente)}
          />
        )}
      />
    </List.Section>
  );
};

export default ListaPacientes;

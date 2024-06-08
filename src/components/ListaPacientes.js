import React, { useContext } from "react";
import { Dimensions} from "react-native";
import { CitasContext } from "../context/CitasContext";
import { ActivityIndicator, IconButton, List, useTheme } from "react-native-paper";
import globalStyles from "../styles/global";
import { moderateScale, scale } from "react-native-size-matters";
const { width } = Dimensions.get("window");


const ListaPacientes = ({ item }) => {
  const { buscarCitasPaciente } = useContext(CitasContext);
  const theme=useTheme()
  const isTablet = width >= 768;

  // Renderiza cada elemento de la lista
  //   const renderItem = ({ item }) => (
  //     <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
  //       <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
  //         {item.nombrePaciente} {item.apellidoPaciente}
  //       </Text>
  //     </View>
  //   );

  const { apellidoPaciente, nombrePaciente, idPaciente } = item;

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
        description={idPaciente}
        style={{borderBottomWidth:moderateScale(1)}}
        //onLongPress={() => buscarCitasPaciente(idPaciente)}
        titleStyle={globalStyles.titleStListItem}
        descriptionStyle={globalStyles.descripListItem}
        // right={() => ( <ActivityIndicator animating={true} color='red' />)}
        right={() => (
          <IconButton
          mode="outlined"
            icon="calendar-search"
            iconColor={theme.colors.primary}
            size={isTablet?scale(13):scale(18)}
            onPress={() => buscarCitasPaciente(idPaciente)}
          />
        )}
      />
    </List.Section>
  );
};

export default ListaPacientes;

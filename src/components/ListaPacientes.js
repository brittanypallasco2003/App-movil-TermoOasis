import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { CitasContext } from "../context/CitasContext";
import { List } from "react-native-paper";


const ListaPacientes = ({ item }) => {
  const { buscarCitasPaciente } = useContext(CitasContext);

  // Renderiza cada elemento de la lista
  //   const renderItem = ({ item }) => (
  //     <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
  //       <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
  //         {item.nombrePaciente} {item.apellidoPaciente}
  //       </Text>
  //     </View>
  //   );

  const { apellidoPaciente, nombrePaciente,idPaciente } = item;

  return (
    // <View style={{ flex: 1, padding: 20 }}>
    //      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
    //   <Text style={{ fontSize: 16, fontWeight: "bold" }}>
    //     {nombrePaciente} {apellidoPaciente}  {idPaciente}
    //   </Text>

    //      </View>
    // </View>
    <List.Section>
        <List.Item title={`${nombrePaciente} ${apellidoPaciente}`}
        description={idPaciente}
        onLongPress={() => buscarCitasPaciente(idPaciente)}
        />
    </List.Section>
  );
};

export default ListaPacientes;

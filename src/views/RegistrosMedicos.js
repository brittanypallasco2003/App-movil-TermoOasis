import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import CargandoDatosComp from "../components/CargandoDatosComp";
import Receta from "../components/Receta";
import SwiperFlatList from "react-native-swiper-flatlist";
import { ScrollView } from "react-native";
import { Avatar, Card, useTheme } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const { width } = Dimensions.get("window");

const RegistrosMedicos = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { idCita, nombrePaciente, apellidoPaciente } = route.params;
  const { detalleRegistro, cargandoRegistro, recetaRegistro } =
    useContext(CitasContext);
  const { actividad, comments, cuidados, dieta, informacionMedica } =
    detalleRegistro;
  const theme = useTheme();
  const isTablet = width >= 768;
  return (
    <SafeAreaView style={globalStyles.contenedorRegistros}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {cargandoRegistro ? (
          <CargandoDatosComp />
        ) : (
          <View style={globalStyles.CardRegistros}>
            <Text
              style={[
                globalStyles.titleDetalleR,
                globalStyles.espacioDetalle,
                { textAlign: "center" },
              ]}
            >
              Paciente:
            </Text>
            <Text
              style={globalStyles.titleDetalleR}
            >{`${nombrePaciente} ${apellidoPaciente}`}</Text>
            <Avatar.Icon
              size={isTablet ? scale(105) : scale(130)}
              style={[globalStyles.iconMedicina,]}
              icon="medical-bag"
            />
            <View style={globalStyles.infoRegistros}>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Actividad recomendada:{" "}
                <Text style={globalStyles.textoDetalleR}>{actividad}</Text>
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Comentarios:{" "}
                <Text style={globalStyles.textoDetalleR}>{comments}</Text>
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Cuidados:{" "}
                <Text style={globalStyles.textoDetalleR}>{cuidados}</Text>
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Dieta prescrita:{" "}
                <Text style={globalStyles.textoDetalleR}>{dieta}</Text>
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Información Medica:
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Altura:{" "}
                <Text
                  style={globalStyles.textoDetalleR}
                >{`${informacionMedica?.altura} cm`}</Text>
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Peso:{" "}
                <Text
                  style={globalStyles.textoDetalleR}
                >{`${informacionMedica?.peso} kg`}</Text>
              </Text>
              <Text
                style={[
                  globalStyles.labelDetalleR,
                  globalStyles.espacioDetalle,
                ]}
              >
                Receta:
              </Text>
              <SwiperFlatList
                showPagination
                paginationStyle={globalStyles.paginationStyle}
                paginationStyleItem={globalStyles.paginationDot}
                paginationActiveColor={
                  globalStyles.paginationDotActive.backgroundColor
                }
                data={recetaRegistro}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => <Receta item={item} />}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrosMedicos;

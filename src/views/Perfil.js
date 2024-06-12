import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarComp from "../components/AppBarComp";
import AvatarUser from "../components/AvatarUser";
import { Card, Headline, useTheme } from "react-native-paper";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const Perfil = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { apellido, email, nombre, telefono, direccion, cedula } =
    infoUsuariObtenida;
  return (
    <>
      <AppBarComp />
      <SafeAreaView style={[globalStyles.contenedorPerfil]}>
        <Card
          mode="elevated"
          style={{ borderRadius: moderateScale(20) }}
          contentStyle={globalStyles.contentStCard}
        >
          <View
          style={globalStyles.contenedorAvatar}
          >
              <AvatarUser />
          </View>
          <Card.Title
            title="Datos Personales"
            titleStyle={globalStyles.titleDatos}
          />
          <Card.Content style={{ alignItems: "center" }}>
            <Text style={globalStyles.contenedoresText}>
              <Text
                style={[
                  globalStyles.textosLabel,
                  {
                    // color:'#fff',
                  },
                ]}
              >
                Nombre:{" "}
              </Text>
              <Text style={globalStyles.textosInfo}>{nombre}</Text>
            </Text>

            <Text style={globalStyles.contenedoresText}>
              <Text
                style={[
                  globalStyles.textosLabel,
                  // { color:'#fff' },
                ]}
              >
                Apellido:{" "}
              </Text>
              <Text style={globalStyles.textosInfo}>{apellido}</Text>
            </Text>

            <Text style={globalStyles.contenedoresText}>
              <Text
                style={[
                  globalStyles.textosLabel,
                  // { color:'#fff' },
                ]}
              >
                Cédula:{" "}
              </Text>
              <Text style={globalStyles.textosInfo}>{cedula}</Text>
            </Text>

            <Text style={globalStyles.contenedoresText}>
              <Text
                style={[
                  globalStyles.textosLabel,
                  // {color:'#fff' },
                ]}
              >
                Correo Electrónico:{" "}
              </Text>
              <Text style={globalStyles.textosInfo}>{email}</Text>
            </Text>

            <Text style={globalStyles.contenedoresText}>
              <Text
                style={[
                  globalStyles.textosLabel,
                  // { color:'#fff'},
                ]}
              >
                Teléfono:{" "}
              </Text>
              <Text style={globalStyles.textosInfo}>{`0${telefono}`}</Text>
            </Text>

            <Text style={globalStyles.contenedoresText}>
              <Text
                style={[
                  globalStyles.textosLabel,
                  // { color:'#fff' },
                ]}
              >
                Dirección:{" "}
              </Text>
              <Text style={[globalStyles.textosInfo, {}]}>{direccion}</Text>
            </Text>
          </Card.Content>
        </Card>
      </SafeAreaView>
    </>
  );
};

export default Perfil;

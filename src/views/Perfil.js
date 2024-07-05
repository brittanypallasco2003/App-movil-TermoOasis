import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarComp from "../components/AppBarComp";
import AvatarUser from "../components/AvatarUser";
import { Card, useTheme } from "react-native-paper";
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <Card
            mode="elevated"
            style={{
              borderRadius: moderateScale(20),
              marginBottom: verticalScale(20),
            }}
            contentStyle={globalStyles.contentStCard}
          >
            <Card.Title
              title="Datos Personales"
              titleStyle={globalStyles.titleDatos}
              style={{ marginTop: verticalScale(15) }}
            />
            <AvatarUser />
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
                <Text style={globalStyles.textosInfo}>{`+${telefono}`}</Text>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Perfil;

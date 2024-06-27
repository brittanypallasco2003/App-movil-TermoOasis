import { Appbar, useTheme } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { useContext } from "react";
import { RegistrosContext } from "../context/RegistrosContext";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import BuscadorRegistro from "./BuscadorRegistros";
import globalStyles from "../styles/global";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
export default function AppBarRegistros({ navigation, route, options, back }) {
  const { visibleBuscador, setvisibleBuscador } = useContext(RegistrosContext);
  const theme = useTheme();
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header
      mode="small"
      style={{
        backgroundColor: theme.colors.secondary,
        marginVertical: visibleBuscador
          ? isTablet
            ? verticalScale(15)
            : verticalScale(8)
          : isTablet
          ? verticalScale(8)
          : verticalScale(5),
      }}
      elevated={true}
    >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      {visibleBuscador ? (
        <BuscadorRegistro />
      ) : (
        <>
          <Appbar.Content
            title={title}
            titleStyle={globalStyles.appBarTitleDoctor}
            style={{paddingLeft:moderateScale(25)}}
          />
          <Appbar.Action
            icon="file-search-outline"
            style={{
              backgroundColor: "#B7D5CF",
              borderRadius: isTablet ? moderateScale(7) : moderateScale(15),
              marginRight: moderateScale(25),
            }}
            size={isTablet ? scale(14) : scale(20)}
            onPress={() => setvisibleBuscador(true)}
          />
        </>
      )}
    </Appbar.Header>
  );
}

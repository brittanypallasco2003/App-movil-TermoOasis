import React, { useContext } from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Dimensions } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import SearchBarComp from "./SearchBarComp";
import { CitasContext } from "../context/CitasContext";
import globalStyles from "../styles/global";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const AppBarPBuscador = ({ navigation, route, options, back }) => {
  const { searchVisible, setSearchVisible } = useContext(CitasContext);

  const theme = useTheme();
  const title = options ? getHeaderTitle(options, route.name) : "";

  return (
    <Appbar.Header
      mode="small"
      style={{
        backgroundColor: theme.colors.secondary,
        marginVertical: searchVisible
          ? isTablet
            ? verticalScale(15)
            : verticalScale(8)
          : isTablet
          ? verticalScale(8)
          : verticalScale(5),
      }}
      elevated={true}
    >
      {back ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color="#B7D5CF"
          size={isTablet ? scale(14) : scale(20)}
          style={globalStyles.iconBack}
        />
      ) : null}
      {searchVisible ? (
        <SearchBarComp />
      ) : (
        <>
          <Appbar.Content
            title={title}
            titleStyle={globalStyles.appBarTitleDoctor}
            style={{ paddingLeft: moderateScale(25) }}
          />
          {!back && (
            <Appbar.Action
              icon="account-search"
              style={{
                backgroundColor: "#B7D5CF",
                borderRadius: isTablet ? moderateScale(7) : moderateScale(15),
                marginRight: moderateScale(25),
              }}
              size={isTablet ? scale(14) : scale(20)}
              onPress={() => setSearchVisible(true)}
            />
          )}
        </>
      )}
    </Appbar.Header>
  );
};

export default AppBarPBuscador;

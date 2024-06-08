import React, { useState, useContext } from "react";
import { Dimensions } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import SearchBarComp from "./SearchBarComp";
import { CitasContext } from "../context/CitasContext";
import globalStyles from "../styles/global";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const AppBarPBuscador = () => {
  const { searchVisible, setSearchVisible, buscarPacientes } =
    useContext(CitasContext);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    buscarPacientes(query);
  };

  return (
    <Appbar.Header
      mode="small"
      style={{
        backgroundColor: theme.colors.secondary,
        marginVertical: isTablet ? verticalScale(15) : verticalScale(8),
      }}
      elevated={true}
    >
      {searchVisible ? (
        <SearchBarComp
          searchQuery={searchQuery}
          onChangeSearch={onChangeSearch}
        />
      ) : (
        <>
          <Appbar.Content
            title="Citas"
            titleStyle={[
              globalStyles.appBarTitleDoctor,
            ]}
            style={{ paddingLeft: moderateScale(25) }}
          />
          <Appbar.Action
            icon="account-search"
            style={{
              backgroundColor: "#B7D5CF",
              borderRadius: isTablet?moderateScale(7):moderateScale(15),
              marginRight:moderateScale(25)
            }}
            size={isTablet ? scale(14) : scale(20)}
            onPress={() => setSearchVisible(true)}
          />
        </>
      )}
    </Appbar.Header>
  );
};

export default AppBarPBuscador;

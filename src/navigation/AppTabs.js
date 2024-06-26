import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilStack from "./PerfilStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme, BottomNavigation, Text } from "react-native-paper";
import { screen } from "../utils";
import CitasStack from "./CitasStack";
import { CommonActions } from "@react-navigation/native";
import { moderateScale, scale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { AuthContext } from "../context/AuthContext";
import RegistrosStack from "./RegistrosStack";

const { width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();
const isTablet = width >= 768;
const AppTabs = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;
  return (
    <Tab.Navigator
      initialRouteName={screen.citas.tab}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, insets }) => (
        <BottomNavigation.Bar
          labeled={false}
          activeIndicatorStyle={{
            backgroundColor: "#267373",
            padding: moderateScale(16),
          }}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route }) => {
            const focused =
              state.index ===
              state.routes.findIndex((r) => r.key === route.key);
            const color = focused ? "#fff" : "#B7D5CF";
            const iconName = getIconName(route.name);
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={isTablet ? scale(14) : scale(20)}
              />
            );
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            const focused =
              state.index ===
              state.routes.findIndex((r) => r.key === route.key);
            const color = focused ? "#fff" : "#B7D5CF";

            return (
              <Text style={{ fontFamily: "Quicksand_600SemiBold", color }}>
                {label}
              </Text>
            );
          }}
          activeColor="#A8BF56"
          inactiveColor="#B7D5CF"
          barStyle={{ backgroundColor: theme.colors.secondary }}
        />
      )}
    >
      <Tab.Screen
        name={screen.citas.tab}
        component={CitasStack}
        options={{
          tabBarLabel: "Citas",
        }}
      />
      <Tab.Screen name={screen.perfil.tab} component={PerfilStack} />
      {isDoctor && (
        <Tab.Screen name={screen.registros.tab} component={RegistrosStack} />
      )}
    </Tab.Navigator>
  );
};

function getIconName(routeName) {
  if (routeName === screen.citas.tab) {
    return "calendar-month";
  }
  if (routeName === screen.perfil.tab) {
    return "account";
  }
  if (routeName ===screen.registros.tab){
    return "file-document-outline"
  }
  return null;
}
export default AppTabs;

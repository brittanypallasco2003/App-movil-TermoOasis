import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilStack from "./PerfilStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme, BottomNavigation, Text } from "react-native-paper";
import { screen } from "../utils";
import CitasStack from "./CitasStack";
import { CommonActions } from "@react-navigation/native";
import { moderateScale, scale } from "react-native-size-matters";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();
const isTablet = width >= 768;
const AppStack = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={screen.citas.tab}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
        //style={{padding:moderateScale(20)}}
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
          // headerShown: isDoctor
          tabBarLabel: "Citas",
          //tabBarLabelStyle: { fontFamily: "Quicksand_600SemiBold" },
        }}
      />
      <Tab.Screen
        name={screen.perfil.tab}
        component={PerfilStack}
        options={{
          // title:"Termo Oasis",
          tabBarLabel: "Perfil",
          //tabBarLabelStyle: { fontFamily: "Quicksand_600SemiBold" },
        }}
      />
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
  return null;
}
export default AppStack;

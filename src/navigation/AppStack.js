import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilStack from './PerfilStack'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { screen } from "../utils";
import CitasStack from './CitasStack'
import { CitasContext } from "../context/CitasContext";

const Tab = createBottomTabNavigator();

const AppStack = () => {

  const theme = useTheme();

  return (
    <Tab.Navigator
    initialRouteName={screen.perfil.tab}
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: theme.colors.secondary },
        tabBarIcon: ({ color, size }) => tabOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.citas.tab}
        component={CitasStack}
        options={{
          // headerShown: isDoctor
          tabBarLabel: "Citas",
          tabBarLabelStyle: { fontFamily: "Quicksand_600SemiBold" },
        }}
      />
      <Tab.Screen
        name={screen.perfil.tab}
        component={PerfilStack}
        options={{
          // title:"Termo Oasis",
          tabBarLabel: "Perfil",
          tabBarLabelStyle: { fontFamily: "Quicksand_600SemiBold" },
        }}
      />
    </Tab.Navigator>
  );
};

function tabOptions(route, color, size) {
  let iconName;
  if (route.name === screen.citas.tab) {
    iconName = "calendar-month";
  }
  if (route.name === screen.perfil.tab) {
    iconName = "account";
  }

  return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
}
export default AppStack;

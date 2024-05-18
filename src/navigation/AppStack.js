import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "../views/Perfil";
import CalendarioCitas from "../views/CalendarioCitas";
import { AuthContext } from "../context/AuthContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: theme.colors.secondary },
        tabBarIcon: ({ color, size }) => tabOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.citas.tab}
        component={CalendarioCitas}
        options={{
          headerShown: false,
          tabBarLabel: "Citas",
          tabBarLabelStyle: { fontFamily: "Quicksand_600SemiBold" },
        }}
      />
      <Tab.Screen
        name={screen.perfil.tab}
        component={Perfil}
        options={{
          title:"Termo Oasis",
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

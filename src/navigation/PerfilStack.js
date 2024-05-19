import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import Perfil from "../views/Perfil";
import { useTheme } from "react-native-paper";
const Stack = createNativeStackNavigator();

const PerfilStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={screen.perfil.pageName}
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: theme.colors.secondary,
        // },
        // headerTitleStyle: {
        //   fontFamily: "LexendExa_700Bold",
        // },
      }}
    >
      <Stack.Screen
        name={screen.perfil.pageName}
        component={Perfil}
        options={{
          title: "Termo Oasis",
          //headerRight: () => <ButtonLogOut />,
        }}
      />
    </Stack.Navigator>
  );
};

export default PerfilStack;

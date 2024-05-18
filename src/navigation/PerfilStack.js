import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import Perfil from "../views/Perfil";
const Stack = createNativeStackNavigator();

const PerfilStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.perfil.pageName}
        component={Perfil}
        options={{ title: "Termo Oasis" }}
      />
    </Stack.Navigator>
  );
};

export default PerfilStack;

import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestablecerPassword from '../views/RestablecerPassword';
import Login from '../views/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Iniciar Sesión",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestablecerPassword"
          component={RestablecerPassword}
          options={{
            title: "RestablecerPassword",
            headerShown: false,
          }}
        />
    </Stack.Navigator>
  )
}

export default AuthStack
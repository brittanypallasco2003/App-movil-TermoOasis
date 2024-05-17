import React,{useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../views/Perfil';
import CalendarioCitas from '../views/CalendarioCitas';
import { AuthContext } from "../context/AuthContext";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from "react-native-paper"

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    const { infoUsuariObtenida } = useContext(AuthContext);
    const { isDoctor}=infoUsuariObtenida
    const theme = useTheme();


  return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:theme.colors.primary,
        tabBarInactiveTintColor:'#fff',
        tabBarStyle:{backgroundColor:theme.colors.secondary, }
      }}
      >
        <Tab.Screen name="Citas" component={CalendarioCitas}
        options={{headerShown: false,
            tabBarLabelStyle:{fontFamily:'Quicksand_600SemiBold'},
            tabBarIcon:({color,size}) => <MaterialCommunityIcons name='calendar-month' color={color} size={25}/>
        }} />
        <Tab.Screen name={'Termo Oasis'} component={Perfil} 
        options={{
            tabBarLabel:'Perfil',
            tabBarLabelStyle:{fontFamily:'Quicksand_600SemiBold'},
            tabBarIcon:({color,size}) => <MaterialCommunityIcons name='account' color={color} size={25}/>
        }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator
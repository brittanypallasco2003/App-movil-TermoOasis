import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Perfil from '../views/Perfil';
import CalendarioCitas from '../views/CalendarioCitas';

const routes = [
  {
    key: 'citas',
    title: 'Citas',
    focusedIcon: 'calendar-month',
    unfocusedIcon: 'calendar-month-outline',
  },
  {
    key: 'perfil',
    title: 'Perfil',
    focusedIcon: 'account',
    unfocusedIcon: 'account-outline',
  },
];

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    citas: () =><CalendarioCitas/> ,
    perfil: () => <Perfil/>,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabBar;
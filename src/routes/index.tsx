import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MegaSenaScreen from '../screens/MegaSena';
import QuinaScreen from '../screens/Quina';
import TimeManiaScreen from '../screens/TimeMania';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator initialRouteName="MegaSena">
      <Drawer.Screen name="Mega-sena" component={MegaSenaScreen} />
      <Drawer.Screen name="Quina" component={QuinaScreen} />
      <Drawer.Screen name="Timemania" component={TimeManiaScreen} />
    </Drawer.Navigator>
  );
};

export default Routes;

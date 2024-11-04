import { LoteriaProvider } from './src/contexts/loteriaContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MegaSenaScreen from './src/screens/MegaSena';
import QuinaScreen from './src/screens/Quina';
import TimeManiaScreen from './src/screens/TimeMania';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <LoteriaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='MegaSena'
        >
          <Drawer.Screen name='Mega-Sena' component={MegaSenaScreen} />
          <Drawer.Screen name='Quina' component={QuinaScreen} />
          <Drawer.Screen name='TimeMania' component={TimeManiaScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </LoteriaProvider>
  );
}

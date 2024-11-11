import { LoteriaProvider } from './src/contexts/loteriaContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MegaSenaScreen from './src/screens/MegaSena';
import QuinaScreen from './src/screens/Quina';
import TimeManiaScreen from './src/screens/TimeMania';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import Routes from './src/routes';

export type RootStackParamList = {
  Home: undefined;
  Screens: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <LoteriaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Screens" component={Routes} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoteriaProvider>
  );
}

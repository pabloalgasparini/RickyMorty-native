import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mostrar from './src/views/Mostrar';
import Grid from './src/views/Grid';


export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        {/* Nuestro controlador/context de navegacion */}
        <Stack.Navigator initialRouteName='Home'>
          {/* Las vistas/paginas que tendra nuestra app */}
          {/* Esto se asemeja al funcionamiento de react router dom con las Routes */}
          <Stack.Screen name='Home' component={Mostrar} />
          <Stack.Screen name='Listar' component={Grid} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
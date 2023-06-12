import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mostrar from './src/views/Mostrar';
import Grid from './src/views/Grid';

//REDUX

//Necesitamos el provider para envolver toda la app 
//y cuando lo envuelva hay que pasarle la store por medio de las props
//asi ya estaria enlazada la app

import { Provider } from 'react-redux'
import store from './components/redux/store/store'

import HomeView from './components/Home';
import RegistroView from './components/Registro';
import LoginView from './components/Login';



export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
    <Provider store={store}>
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
    </Provider>
    </>
  );
}
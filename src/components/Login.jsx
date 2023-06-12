import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  
  TextInput,
  Dimensions,
 
} from "react-native";

import * as Animatable from "react-native-animatable";

//REDUX

//como se dijo antes el provider permite que la store este disponiple para toda la app
//pero ahora se necesita conectar todos los componentes entonces hacemos uso del connect
import { connect } from "react-redux";

//traemos  las acciones 
import { loginUser } from "./redux/actions/login.actions";


//

//


const Login = ({loginUser, navigation }) => {

  
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');


  const handleLogin =async () => {
 

    const enviarDatos= await loginUser(email, password);

   
   if (enviarDatos) {
     navigation.navigate('tareas')
   }
     
     };



   

  return (
    <View style={styles.container}>
     
       
          <Animatable.Text
            animation="zoomIn"
            style={{
              fontFamily: "RobotoSlab",
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
              top: 30,
            }}
          >
            Inicio de Sesión
          </Animatable.Text>
        
     
     

       

{/* <TextInput
     style={styles.input}
     placeholder="Usuario" 
      name="usuario"
      onChangeText={(text) => {
        setUsuario(text)
      }
      }/> */}


      <TextInput
        style={styles.input}
        placeholder="Email"
        name="email"
        onChangeText={(text) => {
          setEmail(text)
        }
        }
    
      />

        <TextInput
                style={styles.input}
                placeholder="Contraseña"
                name="password"
                onChangeText={(text) => {
                  setPassword(text)
                }
                }
            
            />


      <View style={styles.buttonHome2}>
        <Button title="Enviar" color="#F4D03F" onPress={() => handleLogin()}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


  viewContent: {
    marginBottom: 50,
  },

  titulo: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor:"#5DADE2"
  },

  input: {
    backgroundColor:"#ffff",
    borderRadius:10,
    height: 40,
    margin: 12,
  width:300,
    padding: 10,
    top:100,
    left:50,
  },

  buttonHome2: {
    marginBottom: 30,
    width: 200,
    top: 150,
    left: 120,

    alignItems: "center",
  },

  bottom: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 0,
  },
  box: {
    backgroundColor: "#5DADE2",
    height: 400,
  },

});

//esta constante va a ser igual a una funcion la cual va a recibir un parametro que seria el estado
//devuelve un objeto

//Parece un poco raro esto de hacer una funcion, con un state que aun no sabemos donde nos esta enviando y podemos recuperar el estado actual
//connect internamente va a ejecutar esta funcion y le va a pasar el estado internamente, entonces no tenemos que hacer nada nosotros
//gracias a que conectamos el componente, va a devolver un nuevo componente que ya tiene los props integrados asi que ahora podemos acceder a ellos

const mapStateToProps = (state) => ({
  auth: state.login.auth,
  
});



//aca mandamos a llamar el connect y basicamente es una funcion que devuelve otra funcion
//en la primera funcion hay que convertir el estado a props y se utiliza una constante llamada mapStateToProps
//en la segunda funcion mandamos a llamar al componente y asi ya estaria conectado
export default connect(mapStateToProps, { loginUser })(Login);

import {Button, View, ImageBackground } from 'react-native';
import { ScaledSheet} from 'react-native-size-matters'
import Grid from './Grid'
import { useState } from 'react';


export default function Mostrar({navigation}) {
  const [mostrar, setMostrar] = useState(false)

  return (
    <View style={styles.container}>
      <ImageBackground
       style={styles.imagen}
      source={require('../imagenes/rickymorty.jpg')}
      >
       
      {!mostrar && 
      
      <Button style={styles.button}
        onPress={()=>{navigation.navigate('Listar')} }
        title="Mostrar"
        color="#000"
        
        accessibilityLabel="Mostrar Personajes"
      />}

      </ImageBackground>
      

      {/* renderizo las card */}
      {
        mostrar ?  (<Grid />) : (<></>)
      }
      
    </View>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
    
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },

 
// });
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: '10@s',
  },
  imagen:{
    flex: 1,
        resizeMode: 'contain',
        height: '600@s',
        width: '350@s',
        borderRadius: '5@s',
  },
  button:{
    borderRadius:'100@s',
    borderWidth:'100@s',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

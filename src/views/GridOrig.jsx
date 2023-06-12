import React, { useState, useEffect } from 'react';
import { View,  FlatList, ImageBackground} from 'react-native';
import { ScaledSheet} from 'react-native-size-matters'
import Card from '../components/Card';
import axios from 'axios';



const Grid = () => {
    const [data, setData] = useState([]);

    const eliminar = (id) => {
      setData(d => d.filter(e => e.id !== id))
    }
  
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(response => setData(response.data.results))
        .catch(error => console.error(error));
    }, []);
    

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../imagenes/fondo.jpg') }resizeMode="cover" style={styles.image}>

       

        <FlatList
         style={{width:'100%'}}
          data={data}
          keyExtractor={data => data.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <Card data={item} setData={setData} eliminar={eliminar}/>}
        />
        </ImageBackground>
      </View>
    );
  };
  
  const styles = ScaledSheet.create({
    container: {
      flex: '1@s',
      width: '100%',
      backgroundColor: '#fff',
      
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    image: {
      flex: '1@s',
      justifyContent: 'center',
    },
  })

  // const stylesScaled = ScaledSheet.create({
  //   container: {
  //     position: 'absolute',
  //     top: '59@s',
  //     right: '50@s',
  //     width: '58@s',
  //     height: '58@s',
  //   },
  //   texto: {
  //     fontSize: '10@s',
  //   }
  // })
  
  export default Grid;
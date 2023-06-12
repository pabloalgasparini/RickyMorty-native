import { View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import ButonEliminar from './BotonEliminar';
import { ScaledSheet} from 'react-native-size-matters'

// paso como props data y setData desde grid
const Card = ({ data, setData, eliminar }) => {
    const [datos, setDatos] = useState({});


   
    useEffect(() => {
        setDatos(data);
    })

    return (
      <View style={styles.card}>
        <Image source={{ uri: datos.image }} style={styles.cardImage} />
        <Text style={styles.cardName}>{datos.name}</Text>
        <Text style={styles.cardDescription}>Stado: {datos.status}</Text>
        <Text style={styles.cardDescription}>Especie: {datos.species}</Text>
        <Text style={styles.cardDescription}>Genero: {datos.gender}</Text>

        <ButonEliminar data={datos} eliminar={eliminar}/>
        
        {/* <Button style={styles.button}
        onPress={()=>eliminar(datos.id) }
        title="Eliminar"
        color="red"
        
        accessibilityLabel="Eliminar Personajes"
      /> */}
      </View>
    );
  };

  const styles = ScaledSheet.create({
    
    card: {
      backgroundColor: '#FFFACD',
      padding:'10@s',
      borderRadius: '10@s',
      shadowColor: '#000',
      shadowOffset: {
        width: '0@s',
        height: '2@s',
      },
      shadowOpacity: '0.50@s',
      shadowRadius: '5.0@s',
      elevation: '3@s',
      marginRight: '10@s',
      marginBottom: '10@s',
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    cardImage: {
      height: '170@s',
      width: '100@s',
      borderRadius: '10@s',
      marginBottom: '10@s',
    },
    cardName: {
      fontSize: '18@s',
      fontWeight: 'bold',
      marginBottom: '5@s',
    },
    cardDescription: {
      fontSize: '16@s',
      fontStyle: 'italic',
      marginBottom: '5@s',
    },
    button:{

        borderRadius:'100@s',
        borderWidth:'100@s',
      }
  });
  // const stylesScaled = ScaledSheet.create({
  //   card: {
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


  export default Card;
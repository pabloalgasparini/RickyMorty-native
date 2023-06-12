import { Pressable, Text, View } from 'react-native'
import { ScaledSheet} from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons';

// En react native no existe un componente que haga de boton como tal
// React native al ser nativo del dispositivo movil se maneja por medio de gestos en pantalla
const ButonEliminar = ({data, eliminar}) => {
   

    

  return (
    <View>
      {/* una caracteristica importante de Pressable es */}
      {/* poder verificar si fue presionado y utilizarlo dentro de su style */}
      <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#FF7F50' , borderRadius:5,
        borderWidth:5})}
        onPress={()=> eliminar(data.id)}>
        <Text><AntDesign name="delete" size={16} color="black" /> Eliminar</Text>
      </Pressable>
    </View>
  )
}

export default ButonEliminar

const styles = ScaledSheet.create({
    button:{

        borderRadius:'100@s',
        borderWidth:'100@s'
      }
})
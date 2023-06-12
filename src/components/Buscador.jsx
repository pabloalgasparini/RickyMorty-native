// SearchBar.js
import React , {useState}from "react";
import { StyleSheet, TextInput, View, Keyboard, Button,  } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";

const Buscador = ({clicked, setSearchText, setCLicked, buscar,setData, datosBrutos}) => {

 

  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          onChangeText={buscar}
          onFocus={() => {
            setCLicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={(text) => {
              setSearchText(...text);
              
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancelar"
            onPress={() => {
              Keyboard.dismiss();
              setCLicked(false);
              setData(datosBrutos)
            }}
           
          ></Button>
        </View>
      )}
    </View>
  );
};
export default Buscador;

// styles
const styles = ScaledSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: '15@s',
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: '15@s',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: '20@s',
    marginLeft: '10@s',
    width: "90%",
  },
});

import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import Svg, { Path } from "react-native-svg";


const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    RobotoSlab: require("../assets/fonts/RobotoSlab-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }





  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
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
            Bienvenido
          </Animatable.Text>
          <Animatable.Text
            animation="zoomIn"
            style={{
              fontFamily: "RobotoSlab",
              fontSize: 27,
              color: "#fff",
              textAlign: "center",
              top: 30,
            }}
          >
            Gestiona tus Tareas
          </Animatable.Text>

          <Svg
            height={750}
            width={Dimensions.get("screen").width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}
          >
            <Path
              fill="#5DADE2"
              d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
        </View>

        <View style={styles.imageView}>
          <Animatable.Image
            animation="zoomIn"
            style={styles.imageSigaf}
            source={require("../assets/img/publicalo.png")}
          />
        </View>
      </View>

      <View style={styles.buttonHome1}>
        <Button
          title="Inicio de Sesión"
          color="#F4D03F"
          onPress={() => navigation.navigate("login")}

        />
      </View>

      <View style={styles.buttonHome2}>
        <Button
          title="Registrarse"
          color="#F4D03F"
          onPress={() => navigation.navigate("registro")}
        />
      </View>

      <View style={styles.cardContainer}>
        {/* Carousel 1 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* render */}
       {/*    <Carousel
            layout={"default"}
            
            data={data.carouselItems}
          
            sliderWidth={Dimensions.get("screen").width}
            itemWidth={300}
            renderItem={renderItem}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    paddingTop: 50,
  },

  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: 400,
    top: -100,
  },
  viewContent: {
    marginBottom: 50,
  },
  cardIMG: {
    width: "75%",
    height: "75%",
    borderRadius: 10,
  },
  titulo: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
  },

  buttonHome1: {
    marginBottom: 30,
    width: 200,
    top: -80,
    alignItems: "center",
  },

  buttonHome2: {
    marginBottom: 30,
    width: 200,
    top: -148,
    left: 222,

    alignItems: "center",
  },

  imageView: {
    position: "absolute",
  },

  imageSigaf: {
    width: 180,
    height: 180,

    margin: 0,
    top: 110,
    left: 120,
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
  bottomWavy: {
    position: "absolute",
    bottom: 20,
  },

  imageBackground: {
    flex: 1,
  },

  avatar: {
    alignItems: "center",
    marginTop: "40%",
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: "hidden",
    borderColor: "#ffffff",
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: "#f2f2fC",
    borderRadius: 50,
    position: "absolute",
    right: 140,
    bottom: 40,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },

  textimg: {
    fontSize: 30,
    top: -100,
    margin: 30,
  },

  text: {
    fontSize: 30,

    margin: 10,
  },

  photos: {
    width: 50,
    height: 50,
    margin: 10,
    position: "relative",
    top: -100,
  },
});

export default Home;
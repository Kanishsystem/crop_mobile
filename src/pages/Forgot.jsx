import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,

  ImageBackground,
  Image,
  TextInput,
  Button,
} from "react-native";
import {
  CROP_LOGO,
  FORGOT_IMAGE,
  FORGOT_LOGO,
  FRAME,
  LOGIN_BACK,
  LOGIN_IMAGE,
  LOGIN_IMAGE2,
  LOGIN_IMAGE3,
} from "../../service/imageservices";

const Forgot = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image} source={FORGOT_IMAGE}>
          <View style={styles.container1}>
            <ImageBackground style={styles.image1} source={FRAME}>
              <Image style={styles.image2} source={CROP_LOGO}></Image>
              <Image style={styles.image3} source={FORGOT_LOGO}></Image>
              <Text style={styles.text}>Forgot Pin?</Text>
              <Text style={styles.text1}>
                Enter Your details to request pin reset.
              </Text>
              
              <TextInput
                style={styles.text3}
                placeholder="   CROP ID"
              ></TextInput>
              
              
              <View style={styles.button}>
                <Button title="Send Mail" />
              </View>
             
                <Text style={styles.text6}>Back to Log In</Text>
                
             
              
            </ImageBackground>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 844,
    width: 390,
   
  },

  container1: {},

  image1: {
    height: 644,
    width: 365,
    marginTop: 50,
    marginLeft: 12,
    borderRadius: 25,
  },

  image2: {
    height: 64,
    width: 137,
    marginLeft: 100,
    marginTop: 10,
  },

  image3: {
    height: 194,
    width: 194,
    marginTop: 30,
    marginLeft: 90,
  },

  text: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 130,
    marginTop: 7,
  },

  text1: {
    marginTop: 20,
    marginLeft: 70,
  },

  

  text3: {
    color: "blue",
    backgroundColor: "white",
    height: 42,
    width: 310,
    marginLeft: 28,
    borderColor: "blue",
    borderWidth: 2,
    marginTop: 30,
    borderRadius:8
  },
  
  color: {
    color: "blue",
  },

  button: {
   
    marginTop:20,
    width:310,
    marginLeft: 28,
    borderRadius:10
  },
  text6:{
    alignItems:"center",
    justifyContent:"center",
    color:"blue",
    marginTop:120,
    marginLeft:140,
    fontWeight:"bold"
  },
  
});

export default Forgot;

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
  FRAME,
  LOGIN_BACK,
  LOGIN_IMAGE,
  LOGIN_IMAGE2,
  LOGIN_IMAGE3,
} from "../../service/imageservices";

const Login3 = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image} source={LOGIN_BACK}>
          <View style={styles.container1}>
            <ImageBackground style={styles.image1} source={FRAME}>
              <Image style={styles.image2} source={CROP_LOGO}></Image>
              <Image style={styles.image3} source={LOGIN_IMAGE3}></Image>
              <Text style={styles.text}>Login</Text>
              <Text style={styles.text1}>
                Your access to a world of offers and rewards
              </Text>
              <View style={styles.text2}>
                <Text>CROP ID</Text>
                <Text>Mobile</Text>
                <Text>Email</Text>
              </View>
              <TextInput
                style={styles.text3}
                placeholder="    Please enter email ID"
              ></TextInput>
              <TextInput style={styles.text4} placeholder="    Password"></TextInput>
              <View style={styles.text5}>
                <Text>Remember me</Text>
                <Text style={styles.color}>Forgot Pin?</Text>
              </View>
              <View style={styles.button}>
                <Button title="Login" />
              </View>
              <View style={styles.text6}>
                <Text>Not a member?</Text>
                <Text style={styles.colors}>Sign up now</Text>
              </View>
              
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
    height: 718,
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
    marginLeft: 150,
    marginTop: 7,
  },

  text1: {
    marginTop: 20,
    marginLeft: 37,
  },

  text2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 28,
  },

  text3: {
    color: "blue",
    backgroundColor: "white",
    height: 42,
    width: 320,
    marginLeft: 20,
    borderColor: "blue",
    borderWidth: 2,
    marginTop: 20,
    borderRadius:8
  },
  text4: {
    color: "grey",
    backgroundColor: "white",
    height: 42,
    width: 320,
    marginLeft: 20,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 20,
    borderRadius:8
  },
  text5: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  color: {
    color: "blue",
  },

  button: {
   
    marginTop:20,
    width:320,
    marginLeft: 20,
  },
  text6:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginTop:30
  },
  colors:{
    color:"blue",
  }
});

export default Login3;

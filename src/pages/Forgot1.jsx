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
  FORGOT_MSG,
  FRAME,
  LOGIN_BACK,
  LOGIN_IMAGE,
  LOGIN_IMAGE2,
  LOGIN_IMAGE3,
} from "../../service/imageservices";
const Forgot1 = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image} source={FORGOT_IMAGE}>
          <View style={styles.container1}>
            <ImageBackground style={styles.image1} source={FRAME}>
              <Image style={styles.image2} source={CROP_LOGO}></Image>
              <Image style={styles.image3} source={FORGOT_MSG}></Image>
              <Text style={styles.text}>Email sent!</Text>
              <View style={styles.text1}>
                <Text>We have sent the link</Text>
                <Text>for reset your pin / Password</Text>
              </View>
              <View style={styles.button}>
                <Button title="Back to Login" />
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
    height: 500,
    width: 380,
    marginTop: 170,
    marginLeft: 6,
    borderRadius: 25,
  },
  image2: {
    height: 64,
    width: 137,
    marginLeft: 117,
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
    alignItems: "center",
  },

  button: {
    marginTop: 55,
    width: 310,
    marginLeft: 28,
    borderRadius: 10,
  },
});
export default Forgot1;

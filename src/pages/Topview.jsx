// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet,ImageBackground } from "react-native";
import { CALLS, CHATS, STATUS } from "../../service/imageservices";

const Tab = createMaterialTopTabNavigator();

const Chats = () => (
  <View>
        <ImageBackground style={styles.image1} source={CHATS}></ImageBackground>
    
  </View>
);

const Status = () => (
  <View >
  <ImageBackground style={styles.image1} source={STATUS}></ImageBackground>

</View>
);

const Calls = () => (
  <View>
        <ImageBackground style={styles.image1} source={CALLS}></ImageBackground>
    
  </View>
);

const Top = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
     <Tab.Navigator>
        <Tab.Screen  name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
      
    </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },

image1:{
   height:740,
   width:430,


   

}

});
export default Top;


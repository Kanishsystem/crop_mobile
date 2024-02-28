// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,StyleSheet, ImageBackground } from 'react-native';
import { EDIT, SETTINGS, SHORTS, YOU } from '../../service/imageservices';

const Tab = createBottomTabNavigator();

const Home = () => (

    <View style={styles.color}>
        <ImageBackground style={styles.image1} source={YOU}></ImageBackground>
    
  </View>
);

const Shorts = () => (

    <View style={styles.color}>
        <ImageBackground style={styles.image1} source={SHORTS}></ImageBackground>
   
  </View>
  );

const Edit = () => (
  <View style={styles.color}>
    <ImageBackground style={styles.image1} source={EDIT}></ImageBackground>

  </View>
  
);
const Settings = () => (

    <View style={styles.color}>
        <ImageBackground style={styles.image1} source={SETTINGS}></ImageBackground>
    
    
  </View>
  );

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shorts" component={Shorts} />
        <Tab.Screen name="Edit" component={Edit} />
        <Tab.Screen name="Settings" component={Settings} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
    colors:{
        color:"red",
        justifyContent:"center",
        alignContent:"center",
        fontWeight:"bold",
        fontSize:20,
        marginTop:250,
        marginLeft:50
    },

    color:{
        backgroundColor:"lightblue",
        flex:1
    },

    image1:{
        height:900,
        width:500,
      
       

    }

});
export default App;

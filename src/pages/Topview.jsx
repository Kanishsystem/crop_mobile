// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  Title,
  Paragraph,
  
} from "react-native";
import {
 Button
} from "react-native-paper";
import { CALLS, CHATS, COMMUNITY, STATUS } from "../../service/imageservices";
import Icon from "react-native-vector-icons/FontAwesome";


const Tab = createMaterialTopTabNavigator();

const Community = () => (
  <View >
    <Image style={styles.image3} source={COMMUNITY}></Image>
    <Text style={styles.text}>Stay Connected With a Community</Text>
    <Text style={styles.text1}>
      Communities bring members together in topic-based </Text> 
      <Text style={styles.text2}>
      groups, and make it easy to get admin announcements.Any </Text>
      <Text style={styles.text3}>
      communinity you're added to will appear
      here. </Text>
      <View style={styles.button}>
      <Button style={styles.button1} mode="contained" >
            Start your Community
        </Button>
      </View>
      
    
      
            
         
  </View>
);

const Chats = () => (
  <View>
    <ImageBackground style={styles.image1} source={CHATS}></ImageBackground>
  </View>
);

const Status = () => (
  <View>
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
      <Text style={styles.Text}>WhatsApp</Text>
      <View style={styles.cons}>
        <Icon name="camera" size={25} color="black" />
        <Icon name="ellipsis-v" size={25} color="black" style={styles.dot} />
      </View>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Community" component={Community} />
          <Tab.Screen name="Chats" component={Chats} />
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
    marginTop: 40,
    padding: 6,
  },

  image1: {
    height: 740,
    width: 430,
  },
  Text: {
    fontSize: 28,
    color: "green",
  },
  cons: {
    position: "absolute",
    marginLeft: 330,
    marginBottom: 50,
    flexDirection: "row",
  },
  dot: {
    marginLeft: 30,
  },

  image3: {
    height: 255,
    width: 272,
    marginTop: 60,
    marginLeft: 65,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 80,
  },
  text1:{
   marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:30
  },

  text2:{
    marginLeft:18
  },
  text3:{
    marginLeft:40
  },

  
  button1:{
    
    height:40,
    width:350,
    borderRadius:25,
  backgroundColor:"#069e5f",
  marginLeft:30,
  alignItems:"center",
  justifyContent:"center",
  

  },

  button:{
marginTop:30
  },
  
});
export default Top;

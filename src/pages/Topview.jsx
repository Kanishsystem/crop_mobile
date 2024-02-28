// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const FirstScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen",
    }}
  >
    <Text style={styles.text}>First Screen Content</Text>
  </View>
);

const SecondScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen",
    }}
  >
    <Text style={styles.text}>Second Screen Content</Text>
  </View>
);

const ThirdScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen",
    }}
  >
    <Text style={styles.text}>Third Screen Content</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name="Chats" component={FirstScreen} />
        <Tab.Screen name="Status" component={SecondScreen} />
        <Tab.Screen name="Calls" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  colors: {
    backgroundColor: "green",
    color:"blue"
  },
});
export default App;


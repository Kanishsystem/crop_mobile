import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  Title,
  Paragraph,
  ScrollView,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Button, Card } from "react-native-paper";
import {} from "../../service/imageservices";
import Icon from "react-native-vector-icons/FontAwesome";
const Stack = createStackNavigator();


const HomeTop = () => {
  return (
    <View style={styles.card}>
      <Text>Home</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     height: 870,
  //     width: 360,
  //   },

  card: {
    height: 90,
    width: 396,
  },
});

export default HomeTop;

import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { MOBILE, VECTOR } from "../../service/imageservices";
import Icon from "react-native-vector-icons/AntDesign";
import Cards from "./cards";
import { ScrollView } from "react-native";

const Mobilecards = ({ navigation }) => {
  data = [
    {
      product: "Product1",
      Aud: "AUD 576.00",
      currency: "4389.00",
    },
    {
      product: "Product2",
      Aud: "ACD 576.00",
      currency: "4444.00",
    },
    {
      product: "Product3",
      Aud: "ADD 576.00",
      currency: "4566.000",
    },
    {
      product: "Product4",
      Aud: "ASD 576.00",
      currency: "6777.00",
    },
    {
      product: "Product5",
      Aud: "AFG 576.00",
      currency: "565657.00",
    },
    {
      product: "Product5",
      Aud: "AFG 576.00",
      currency: "565657.00",
    },
  ];

  return (
    <>
      <View style={styles.displayContainer}>
        <View style={styles.container}>
          <View style={styles.contain}>
            <Cards data={data} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: "100%",
  
    
  },
  displayContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   
  },
  container: {
    width: "100%",
 
    flexWrap: "nowrap",
    display: "flex",
    flexDirection: "column",
  },
});
export default Mobilecards;

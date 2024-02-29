import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Card,
  Checkbox,
  Dialog,
  FAB,
  TextInput,
  Title,
  Paragraph,
  Snackbar,
} from "react-native-paper";
import { SafeAreaView } from "react-native";
import {
  EFIL,
  FORGOT_IMAGE,
  LOGIN_BACK,
  TAJ,
} from "../../service/imageservices";
const Cardone = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.contain}>
          <Title style={styles.contains}>REACT NATIVE PAPER [CARD]</Title>
        </View>

        <Card style={styles.card}>
          <Card.Cover source={TAJ} style={styles.cardcover} />
          <Card.Content style={styles.cardcontent}>
            <Title>Taj Mahal</Title>
            <Paragraph>
              It was built by the fifth Mughal emperor, Shah Jahan in 1631 in
              memory of his third but the most favourite wife, in fact a
              soul-mate Mumtaz Mahal, a Muslim Persian princess. She died while
              accompanying her husband in Burhanpur in a campaign to crush a
              rebellion after giving birth to their 13th child.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 870,
    width: 360,

    backgroundColor: "lightblue",
  },

  container1: {
    height: 40,
    width: 300,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 28,
    backgroundColor: "blue",
  },

  contain: {
    marginTop: 100,
    marginLeft: 28,
  },
  contains: {
    color: "blue",
    marginLeft: 15,
    fontWeight: "bold",
  },

  card: {
    width: 300,
    height: 450,
    marginLeft: 28,
    marginTop: 20,
  },

  cardcover: {
    height: 250,
  },
});

export default Cardone;

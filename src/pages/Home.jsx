import React from "react";
import { Button } from "react-native-paper";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
  items = [

    {
      title: "Homecard",
      link: "homecard",
    },
    // {
    //   title: "ParentHomecard",
    //   link: "parenthomecard",
    // },
    {
      title: "HomeTop",
      link: "hometop",
    },
    {
      title: "Mobilecards",
      link: "mobilecards",
    },
    {
      title: "login",
      link: "login",
    },
    {
      title: "forgot",
      link: "forgot",
    },
    {
      title: "Button",
      link: "smart-button",
    },
    {
      title: "Card",
      link: "card",
    },
    {
      title: "Checkbox",
      link: "check",
    },
    {
      title: "Dail",
      link: "dail",
    },
    {
      title: "Forgotone",
      link: "forgotone",
    },
    {
      title: "Icons",
      link: "icons",
    },
    {
      title: "List",
      link: "list",
    },
    {
      title: "Loginone",
      link: "loginone",
    },

    {
      title: "Logintwo",
      link: "logintwo",
    },

    {
      title: "Scrollview",
      link: "Scrollview",
    },

    {
      title: "Searchbar",
      link: "Searchbar",
    },
    {
      title: "Switch",
      link: "Switch",
    },

    {
      title: "Switch",
      link: "Switch",
    },

    {
      title: "Toptabs",
      link: "Toptabs",
    },
  

    // {
    //   title: "Bottomtabs",
    //   link: "bottomtabs",
    // },
  ];
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {/* <Text>Home Screen</Text> */}
            {items.map((item, index) => (
              <View key={index}>
                <Button
                  style={styles.button1}
                  onPress={() => navigation.navigate(item.link)}
                >
                  {item.title}
                </Button>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    marginLeft: 110,
    marginTop: 20,
  },
  button1: {
    backgroundColor: "#069e5f",
    height: 40,
    width: 200,
    marginTop: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
export default Home;

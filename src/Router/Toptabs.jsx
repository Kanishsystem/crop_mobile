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
import { Button } from "react-native-paper";
import {
  CALLS,
  CHAT,
  CHATS,
  COMMUNITY,
  STATUS,
} from "../../service/imageservices";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();

const Community = () => (
  <View>
    <Image style={styles.image3} source={COMMUNITY}></Image>
    <Text style={styles.text}>Stay Connected With a Community</Text>
    <Text style={styles.text1}>
      Communities bring members together in topic-based{" "}
    </Text>
    <Text style={styles.text2}>
      groups, and make it easy to get admin announcements.Any{" "}
    </Text>
    <Text style={styles.text3}>
      communinity you're added to will appear here.{" "}
    </Text>
    <View style={styles.button}>
      <Button style={styles.button1} mode="contained">
        Start your Community
      </Button>
    </View>
  </View>
);

const Chats = () => (
  <View>
    <Image style={styles.image1} source={CHATS}></Image>
    <Text style={styles.text4}>Sharmila</Text>
    <Icon name="check" size={18} color="#087ec2" style={styles.icons} />
    <Text style={styles.text5}>Hiii... Yuva</Text>
    <Text style={styles.text6}>6.00 am</Text>
    <View>
      <Image style={styles.image1} source={CHAT}></Image>
      <Text style={styles.text4}>Balaji</Text>
      <Icon name="check" size={18} color="green" style={styles.icons} />
      <Text style={styles.text5}>This is Balaji..</Text>
      <Text style={styles.text6}>5.27 pm</Text>
    </View>
    <View>
      <Image style={styles.image1} source={CHATS}></Image>
      <Text style={styles.text4}>Anitha</Text>
      <Icon name="check" size={18} color="grey" style={styles.icons} />
      <Text style={styles.text5}>How are you..</Text>
      <Text style={styles.text6}>11.43 am</Text>

      <View style={styles.con}>
        <Icon name="lock" size={18} color="grey" style={styles.icon1} />
        <Text style={styles.text7}>Your Personal Messages are</Text>
        <Text style={styles.text8}>end-to-end encrypted</Text>
      </View>
    </View>
  </View>
);

const Updates = () => <View></View>;

const Calls = () => <View></View>;

const Toptabs = () => {
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
          <Tab.Screen name="Updates" component={Updates} />
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
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 10,
    borderRadius: 20,
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
  text1: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },

  text2: {
    marginLeft: 18,
  },
  text3: {
    marginLeft: 40,
  },

  button1: {
    height: 40,
    width: 350,
    borderRadius: 25,
    backgroundColor: "#069e5f",
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 30,
  },

  text4: {
    position: "absolute",
    marginLeft: 70,
    marginTop: 14,
    fontSize: 18,
  },

  text5: {
    color: "gray",
    fontWeight: "bold",
    position: "absolute",
    marginTop: 40,
    marginLeft: 90,
  },
  icons: {
    position: "absolute",
    marginTop: 40,
    marginLeft: 68,
  },

  text6: {
    position: "absolute",

    marginLeft: 330,
    marginTop: 15,
    fontSize: 13,
  },
  con: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  icon1: {
    marginRight: 7,
  },

  text8: {
    color: "green",
  },
  text7: {
    marginRight: 6,
  },
});
export default Toptabs;

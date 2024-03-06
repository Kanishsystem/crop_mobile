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
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import {
  CALLIN,
  CALLOUT,
  CALLS,
  CHAT,
  CHATS,
  COMMUNITY,
  RECENTONE,
  STATUS,
  UPDATE,
  UPDATES,
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
  <ScrollView>
    <View>
      
      <Image style={styles.image1} source={CHATS}></Image>
      <Text style={styles.text4}>Sharmila</Text>
      <Icon name="check" size={18} color="#087ec2" style={styles.icons} />
      <Text style={styles.text5}>Hiii... Yuva</Text>
      <Text style={styles.text6}>6.00 am</Text>


      <View key="one">
        <Image style={styles.image1} source={CHAT}></Image>
        <Text style={styles.text4}>Arun</Text>
        <Icon name="check" size={18} color="#13ba3f" style={styles.icons} />
        <Text style={styles.text5}>This is Arun..</Text>
        <Text style={styles.text6}>5.27 pm</Text>
      </View>
      <View key="two">
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Anitha</Text>
        {/* <Icon name="check" size={18} color="grey" style={styles.icons} /> */}
        <Text style={styles.text5}>How are you..</Text>
        <Text style={styles.text6}>11.43 am</Text>
        <Icon name="circle" size={23} color="green" style={styles.icons1} />
        <Text style={styles.text9}>5</Text>
      </View>

      <View>
        <Image style={styles.image1} source={UPDATE}></Image>
        <Text style={styles.text4}>Anitha</Text>
        {/* <Icon name="check" size={18} color="grey" style={styles.icons} /> */}
        <Text style={styles.text5}>What you doing..?</Text>
        <Text style={styles.text6}>Yesterday</Text>
        <Icon name="circle" size={23} color="green" style={styles.icons1} />
        <Text style={styles.text9}>9</Text>
      </View>

      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Anitha</Text>
        {/* <Icon name="check" size={18} color="grey" style={styles.icons} /> */}
        <Text style={styles.text5}>How are you..</Text>
        <Text style={styles.text6}>11.43 am</Text>
        <Icon name="circle" size={23} color="green" style={styles.icons1} />
        <Text style={styles.text9}>5</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHAT}></Image>
        <Text style={styles.text4}>Magesh</Text>
        <Icon name="check" size={18} color="#13ba3f" style={styles.icons} />
        <Text style={styles.text5}>This is Magesh..</Text>
        <Text style={styles.text6}>5.27 pm</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Anitha</Text>
        {/* <Icon name="check" size={18} color="grey" style={styles.icons} /> */}
        <Text style={styles.text5}>How are you..</Text>
        <Text style={styles.text6}>11.43 am</Text>
        <Icon name="circle" size={23} color="green" style={styles.icons1} />
        <Text style={styles.text9}>5</Text>
      </View>
      <View>
        <Image style={styles.image1} source={UPDATE}></Image>
        <Text style={styles.text4}>Anitha</Text>
        {/* <Icon name="check" size={18} color="grey" style={styles.icons} /> */}
        <Text style={styles.text5}>What you doing..?</Text>
        <Text style={styles.text6}>Yesterday</Text>
        <Icon name="circle" size={23} color="green" style={styles.icons1} />
        <Text style={styles.text9}>9</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHAT}></Image>
        <Text style={styles.text4}>Magesh</Text>
        <Icon name="check" size={18} color="#13ba3f" style={styles.icons} />
        <Text style={styles.text5}>This is Magesh..</Text>
        <Text style={styles.text6}>5.27 pm</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Anitha</Text>
        {/* <Icon name="check" size={18} color="grey" style={styles.icons} /> */}
        <Text style={styles.text5}>How are you..</Text>
        <Text style={styles.text6}>11.43 am</Text>
        <Icon name="circle" size={23} color="green" style={styles.icons1} />
        <Text style={styles.text9}>5</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Sharmila</Text>
        <Icon name="check" size={18} color="#087ec2" style={styles.icons} />
        <Text style={styles.text5}>Hiii... Yuva</Text>
        <Text style={styles.text6}>6.00 am</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Sharmila</Text>
        <Icon name="check" size={18} color="#087ec2" style={styles.icons} />
        <Text style={styles.text5}>Hiii... Yuva</Text>
        <Text style={styles.text6}>6.00 am</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Sharmila</Text>
        <Icon name="check" size={18} color="#087ec2" style={styles.icons} />
        <Text style={styles.text5}>Hiii... Yuva</Text>
        <Text style={styles.text6}>6.00 am</Text>
      </View>
      <View>
        <Image style={styles.image1} source={CHATS}></Image>
        <Text style={styles.text4}>Sharmila</Text>
        <Icon name="check" size={18} color="#087ec2" style={styles.icons} />
        <Text style={styles.text5}>Hiii... Yuva</Text>
        <Text style={styles.text6}>6.00 am</Text>
      </View>

      <View style={styles.con}>
        <Icon name="lock" size={18} color="grey" style={styles.icon1} />
        <Text style={styles.text7}>Your Personal Messages are</Text>
        <Text style={styles.text8}>end-to-end encrypted</Text>
      </View>
    </View>
  </ScrollView>
);

const Updates = () => (


  <View>
    <View>
      <Text style={styles.text13}> Status</Text>
    </View>
    <View>
      <Image style={styles.image4} source={UPDATE}></Image>
      <Icon name="circle" size={33} color="white" style={styles.icons4} />
      <Icon name="circle" size={25} color="#12c46b" style={styles.icons2} />
      <Text style={styles.text10}>+</Text>

      <Text style={styles.text11}>My Status</Text>
      <Text style={styles.text12}>Tap to add status update</Text>
    </View>

    <View>
      <Text style={styles.text14}>Recent updates</Text>
      <Image style={styles.image5} source={RECENTONE}></Image>
      <Text style={styles.text15}>Geetha</Text>
      <Text style={styles.text16}>10 minutes ago</Text>
      <Image style={styles.image5} source={CHATS}></Image>

      <View style={styles.contain}>
        <Text style={styles.text15}>Anitha</Text>
        <Text style={styles.text19}>28 minutes ago</Text>
      </View>
    </View>

    <View>
      <Text style={styles.text14}>Viewed updates</Text>
      <Image style={styles.image6} source={RECENTONE}></Image>
      <Text style={styles.text15}>Sharmila</Text>
      <Text style={styles.text16}>10.00 am</Text>
      <Image style={styles.image6} source={CHATS}></Image>

      <View style={styles.contain}>
        <Text style={styles.text15}>Vino</Text>
        <Text style={styles.text19}>9.28 am</Text>
      </View>
    </View>

    <View>
      <Text style={styles.texts5}>Channels</Text>
      <Text style={styles.texts6}>+</Text>
      <Text style={styles.texts7}>
        Stay updated on topics that matter to you.channels
      </Text>
      <Text style={styles.texts8}>to follow below.</Text>
    </View>

    <View>
      <Icon name="square" size={43} color="#ced6d0" style={styles.icons5} />
      <Icon name="pencil" size={20} color="grey" style={styles.icons3} />
    </View>
    <View>
      <Icon name="square" size={63} color="#12c46b" style={styles.icons8} />
      <Icon name="camera" size={20} color="white" style={styles.icons9} />
    </View>
  </View>
);

const Calls = () => (
  <View>
    <View>
      <Icon name="circle" size={63} color="#13ba3f" style={styles.icons10} />
      <Icon name="link" size={33} color="white" style={styles.icons11} />
      <Text style={styles.texts}>Create call link</Text>
      <Text style={styles.texts1}>Share a link for your whatsApp call</Text>
    </View>
    <View>
      <Text style={styles.texts2}>Recents</Text>
    </View>

    <View>
      <Image style={styles.image9} source={RECENTONE}></Image>
      <Text style={styles.texts3}>Geetha</Text>
      <Image style={styles.image7} source={CALLIN}></Image>
      <Text style={styles.texts4}>Today, 6:40 am</Text>
      <Icon name="phone" size={23} color="#13ba3f" style={styles.dots} />

      <View>
        <Image style={styles.image9} source={CHATS}></Image>
        <Text style={styles.texts3}>Anitha</Text>
        <Image style={styles.image7} source={CALLOUT}></Image>
        <Text style={styles.texts4}>Yesterday, 10:36 am</Text>
        <Icon name="phone" size={23} color="#13ba3f" style={styles.dots} />
      </View>

      <View>
        <Image style={styles.image9} source={UPDATE}></Image>
        <Text style={styles.texts3}>Pooja</Text>
        <Image style={styles.image7} source={CALLIN}></Image>
        <Text style={styles.texts4}>Monday, 12:16 pm</Text>
        <Icon name="phone" size={23} color="#13ba3f" style={styles.dots} />
      </View>

      <View>
        <Image style={styles.image9} source={CHAT}></Image>
        <Text style={styles.texts3}>Vicky</Text>
        <Image style={styles.image7} source={CALLOUT}></Image>
        <Text style={styles.texts4}>Yesterday, 10:36 am</Text>
        <Icon name="phone" size={23} color="#13ba3f" style={styles.dots} />
      </View>

      <View style={styles.con}>
        <Icon name="lock" size={18} color="grey" style={styles.icon1} />
        <Text style={styles.text7}>Your Personal Calls are</Text>
        <Text style={styles.text8}>end-to-end encrypted</Text>
      </View>
    </View>
  </View>
);

const Toptabs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>WhatsApp</Text>
      <View style={styles.cons}>
        <Icon name="camera" size={23} color="black" style={styles.dot1} />
        <Icon name="search" size={23} color="black" />
        <Icon name="ellipsis-v" size={23} color="black" style={styles.dot} />
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

  but1: {
    height: 50,
    width: 10,
    backgroundColor: "#ced6d0",
    
  },

  image1: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 10,
    borderRadius: 20,
  },
  text19: {
    flexDirection: "row",
    marginLeft: 81,
    marginTop: 65,
    color: "grey",
  },




  image4: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 30,
  },

  image5: {
    width: 58,
    height: 58,
    resizeMode: "contain",
    marginLeft: 12,
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#13ba3f",
  },

  image9: {
    width: 58,
    height: 58,
    resizeMode: "contain",
    marginLeft: 12,
    marginTop: 10,
    borderRadius: 30,
  },

  image6: {
    width: 58,
    height: 58,
    resizeMode: "contain",
    marginLeft: 12,
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "grey",
  },

  Text: {
    fontSize: 28,
    color: "green",
  },
  cons: {
    position: "absolute",
    marginLeft: 305,
    marginBottom: 50,
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    marginLeft: 20,
  },

  contain: {
    position: "absolute",
    marginTop: 65,
  },

  contain1: {
    position: "absolute",
    marginTop: 135,
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

  icons2: {
    position: "absolute",
    marginTop: 47,
    marginLeft: 54,
  },

  icons4: {
    position: "absolute",
    marginTop: 43,
    marginLeft: 51,
  },

  text8: {
    color: "green",
  },
  text7: {
    marginRight: 6,
  },

  icons1: {
    position: "absolute",
    marginLeft: 340,
    marginTop: 35,
  },

  text9: {
    position: "absolute",
    marginLeft: 347,
    marginTop: 36,
    color: "white",
  },

  text10: {
    position: "absolute",
    marginLeft: 58,
    marginTop: 45,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  dot1: {
    marginRight: 20,
    marginEnd: 20,
  },

  text11: {
    fontSize: 19,
    position: "absolute",
    marginLeft: 90,
    marginTop: 17,
  },

  text12: {
    position: "absolute",
    marginLeft: 90,
    marginTop: 45,
    color: "grey",
  },

  text13: {
    fontSize: 23,
    marginLeft: 10,
    marginTop: 7,
    marginBottom: 7,
  },

  text14: {
    marginTop: 10,
    marginLeft: 19,
    color: "grey",
    fontSize: 12,
  },

  text15: {
    position: "absolute",
    marginTop: 40,
    marginLeft: 81,
    fontSize: 18,
  },

  text16: {
    color: "grey",
    position: "absolute",
    marginTop: 65,
    marginLeft: 82,
    flexDirection: "row",
  },

  text20: {
    position: "absolute",
    marginLeft: 90,
    marginTop: 5,
  },
  icons3: {
    position: "absolute",
    marginLeft: 360,
    marginTop: 110,
  },

  icons5: {
    marginLeft: 350,
    marginTop: 100,
  },

  icons8: {
    marginTop: 10,
    marginLeft: 340,
  },

  icons9: {
    position: "absolute",
    marginLeft: 357,
    marginTop: 32,
  },

  icons10: {
    marginTop: 7,
    marginLeft: 7,
  },

  icons11: {
    position: "absolute",
    marginLeft: 19,
    marginTop: 23,
  },

  texts: {
    position: "absolute",
    marginTop: 15,
    marginLeft: 77,
    fontSize: 17,
  },

  texts1: {
    color: "grey",
    position: "absolute",
    marginLeft: 77,
    marginTop: 40,
  },

  texts2: {
    marginLeft: 10,
    marginTop: 11,
    fontSize: 15,
  },

  texts3: {
    position: "absolute",
    marginLeft: 80,
    fontSize: 18,
    marginTop: 8,
  },
  image7: {
    height: 15,
    width: 15,
    position: "absolute",
    marginLeft: 80,
    marginTop: 38,
  },
  texts4: {
    color: "grey",
    position: "absolute",
    marginLeft: 100,
    marginTop: 34,
  },

  dots: {
    position: "absolute",
    marginLeft: 370,
    marginTop: 14,
  },

  texts5: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },

  texts6: {
    position: "absolute",
    fontSize: 33,
    marginLeft: 370,
  },

  texts7: {
    marginLeft: 10,
    color: "grey",
    marginTop: 40,
  },
  texts8: {
    marginLeft: 10,
    color: "grey",
  },
});
export default Toptabs;

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

import { Button, Card } from "react-native-paper";
import {
  CUSTOMER,
  DINE,
  DINES,
  HOMEBACK,
  HOMEBACKS,
  HOMELOGO,
  LABELBACK,
  LABELTWO,
  LABELone,
  LABELthree,
  LABELtwo,
  MENLOGO,
  MOBILECARD,
  RETAIL,
  RETAILS,
  SCROLL,
  SERVICE,
  SERVICES,
  SHOP,
  SHOPLOGO,
  SHOPS,
  VIEWMORE,
} from "../../service/imageservices";
import Icon from "react-native-vector-icons/AntDesign";
import Cards from "./cards";
import Mobilecards from "./Mobilecard";
import LinearGradient from "react-native-linear-gradient";

const Homecard = () => {
  return (
    <View style={styles.overall}>
      <ImageBackground style={styles.imagelogo} source={HOMEBACK}>
        <Card style={styles.card}>
          <ImageBackground style={styles.imagelogos} source={HOMEBACK}>
            <Card.Content style={styles.cardcontent}>
              <View style={styles.overall}>
                <Image style={styles.image} source={MENLOGO}></Image>

                <View style={styles.textcontent}>
                  <Text style={styles.text}>Salman Khan</Text>
                  <Text style={styles.texts}>CROP ID:XXXXXXXXXXX</Text>
                  <View>
                    <Text style={styles.textcolour}>Earn points:XXXXXX</Text>
                    <Text style={styles.textcolour}>Mobile:+61XXXXXXXXX</Text>
                    <Text style={styles.textcolour}>
                      Email Id: salmankhan007@gmail.com
                    </Text>
                  </View>
                </View>
                <Icon
                  name="right"
                  size={18}
                  color="black"
                  style={styles.icon1}
                />
              </View>
            </Card.Content>
          </ImageBackground>
        </Card>
      </ImageBackground>
    </View>
  );
};

const Homelabel = () => {
  const items = [
    { title: "DINE", image: DINE },
    { title: "SERVICE", image: SERVICE },
    { title: "SHOP", image: SHOP },
    { title: "RETAIL", image: RETAIL },
  ];

  return (
    <View style={styles.homelabel}>
      <ImageBackground style={styles.imagelabels} source={HOMEBACKS}>
        <ImageBackground style={styles.imagelabel} source={LABELBACK}>
          <Image style={styles.imagebacks} source={LABELTWO}></Image>
          <Image style={styles.imagescroll} source={SCROLL}></Image>
          <Text style={styles.textscroll}>Earn CROPs</Text>
          <Button style={styles.button}>Others</Button>
        </ImageBackground>
        {items.map((item, index) => (
          <View key={index}>
            <Card style={styles.cards}>
              <Image style={styles.imagecrop} source={item.image}></Image>
              <View style={styles.views}>
                <Text style={styles.txtcolor}>{item.title}</Text>
              </View>
            </Card>
          </View>
        ))}
      </ImageBackground>
    </View>
  );
};

const Labelcard = () => {
  return (
    <View style={styles.labelview}>
      <Card style={styles.labelcard}>
        <Card.Content>
          <View style={styles.labels}>
            <Image source={LABELone}></Image>
            <Image source={LABELtwo}></Image>
            <Image source={LABELthree}></Image>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const Mobilecard = () => {
  const data = [
    { title: "DINE", image: DINES },
    { title: "SERVICE", image: SERVICES },
    { title: "SHOP", image: SHOPS },
    { title: "RETAIL", image: RETAILS },
  ];

  return (
    <View style={styles.mobile}>
      <View style={styles.promo}>
        <Image style={styles.imagescrollpromo} source={SCROLL}></Image>
        <Text style={styles.textpromos}>Promos</Text>

        <Icon name="leftcircleo" size={27} color="black" style={styles.icons} />
        <Icon
          name="rightcircleo"
          size={27}
          color="skyblue"
          style={styles.iconsone}
        />
        <Button style={styles.buttons}>All Promos</Button>
      </View>

      <Mobilecards />

      <View style={styles.redeem}>
        <ImageBackground style={styles.imagelabels} source={HOMEBACKS}>
          <ImageBackground style={styles.imagelabel} source={LABELBACK}>
            <Image style={styles.imagebacks} source={LABELTWO}></Image>
            <Image style={styles.imagescroll} source={SCROLL}></Image>
            <Text style={styles.textscroll}>Redeem CROPs</Text>
            <Button style={styles.button}>Others</Button>
          </ImageBackground>

          {data.map((datas, index) => (
            <View key={index}>
              <Card style={styles.cards}>
                <Image style={styles.imagecrop} source={datas.image}></Image>
                <View style={styles.viewses}>
                  <Text style={styles.txtcolor}>{datas.title}</Text>
                </View>
              </Card>
            </View>
          ))}

          <View style={styles.bottom}>
            <Image style={styles.homelogo} source={HOMELOGO}></Image>
            <Image style={styles.shoplogo} source={SHOPLOGO}></Image>
            <Image style={styles.magcard} source={MOBILECARD}></Image>
            <Image style={styles.customer} source={CUSTOMER}></Image>
            <Image style={styles.viewmore} source={VIEWMORE}></Image>
            <Text style={styles.bottomtext}>Home</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const Homepage = () => {
  return (
    <>
      <ScrollView>
        <Homecard />
        <Homelabel />
        <Labelcard />
        <Mobilecard />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  homelogo: {
    position: "absolute",
    marginLeft: 53,
  },
  magcard: {
    marginLeft: 230,
    marginTop: 22,
    height: 30,
    width: 30,
  },

  customer: {
    position: "absolute",
    marginLeft: 300,
    marginTop: 20,
    height: 30,
    width: 30,
  },

  shoplogo: {
    position: "absolute",
    marginLeft: 150,
    marginTop: 20,
    height: 30,
    width: 30,
  },

  viewmore: {
    position: "absolute",
    marginLeft: 360,
    marginTop: 20,
    height: 30,
    width: 30,
  },

  bottom: {
    height: 70,
    width: "100%",
    backgroundColor: "#D8C1FE",
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  bottomtext: {
    position: "absolute",
    marginLeft: 50,
    marginTop: 34,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  promo: {
    marginLeft: 5,
  },
  redeem: {
    marginTop: 50,
  },

  imagescrollpromo: {
    position: "absolute",
    height: 45,
  },
  icons: {
    position: "absolute",
    marginLeft: 160,
  },
  iconsone: {
    position: "absolute",
    marginLeft: 200,
  },
  textpromos: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  homelabel: {
    display: "flex",
  },
  card: {
    height: 135,
    width: 400,
    marginTop: 25,
    marginLeft: 4,
  },
  image: {
    height: 110,
    width: 110,
  },
  overall: {
    flexDirection: "row",
  },
  textcontent: {
    marginLeft: 7,
    marginTop: 7,
  },

  text: {
    color: "blue",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 20,
  },

  texts: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },

  textcolour: {
    color: "grey",
  },

  icon1: {
    marginTop: 45,
    marginLeft: 10,
  },

  imagelogo: {
    height: 240,
    width: 430,
  },

  imagelogos: {
    height: 135,
    width: 400,
  },
  imagelabel: {
    height: 163,
    width: 419,
  },
  imagebacks: {
    height: 163,
    width: 419,
  },

  labelcard: {
    height: 115,
    width: 370,
    marginLeft: 9,
    backgroundColor: "#66BCF5",
    borderWidth: 2,
    borderColor: "white",
  },

  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imagescroll: {
    position: "absolute",
    marginTop: 122,
    marginLeft: 8,
  },

  textscroll: {
    position: "absolute",
    marginLeft: 30,
    marginTop: 116,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

  button: {
    color: "blue",
    borderColor: "lightblue",
    borderWidth: 2,
    height: 47,
    width: 96,
    position: "absolute",
    backgroundColor: "white",
    marginLeft: 300,
    marginTop: 105,
    fontWeight: "bold",
  },
  buttons: {
    color: "blue",
    borderColor: "lightblue",
    borderWidth: 2,
    height: 47,
    width: 105,
    position: "absolute",
    marginLeft: 280,
    backgroundColor: "white",
    marginHorizontal: 20,
  },

  labelview: {
    position: "absolute",
    marginLeft: 15,
    marginTop: 200,
  },
  imagelabels: {
    height: 3620,
    width: "100%",
  },
  imagecrop: {
    height: 170,
    width: "100%",
  },

  cards: {
    height: 170,
    width: "100%",

    marginTop: 30,
    marginVertical: 40,
  },
  views: {
    position: "absolute",

    alignItems: "center",
    backgroundColor: "#2D105B",
    height: 50,
    width: "100%",
    marginTop: 135,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  viewses: {
    position: "absolute",

    alignItems: "center",
    backgroundColor: "#BE5C41",
    height: 50,
    width: "100%",
    marginTop: 135,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  txtcolor: {
    color: "white",
    marginTop: 2,
    fontSize: 25,
  },
  mobile: {
    position: "absolute",
    marginTop: 1400,
  },
});

export default Homepage;

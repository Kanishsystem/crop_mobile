import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
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
import { MOBILE, VECTOR } from "../../service/imageservices";
import Icon from "react-native-vector-icons/AntDesign";
const Cards = ({data,test}) => {

console.log("item",data)


  return (
    <>
      <SafeAreaView style={styles.container}>
{data.map((item,index)=>{
    return(
        <View key={index}>
        <Card style={styles.card}>
                 <Card.Content style={styles.cardcontent}>
                   <View style={styles.CardText}>
                     <View>
                       <Image source={MOBILE} style={styles.cardcover}></Image>
                     </View>
       
                     <View style={styles.texttwo}>
                       <Text>{item.product}</Text>
                       <View style={styles.star}>
                         <View style={styles.icon}>
                           <Icon name="star" size={10} color="#e6d737" />
                           <Icon name="star" size={10} color="#e6d737" />
                           <Icon name="star" size={10} color="#e6d737" />
                           <Icon name="star" size={10} color="#e6d737" />
                           <Icon name="star" size={10} color="#bfbfb8" />
                         </View>
                         <Text style={styles.text}>4.4</Text>
                       </View>
                       <View style={styles.textone}>
                         <Text style={styles.textthree}>AUD</Text>
                         <Text style={styles.textfour}>{item.Aud}</Text>
                       </View>
                       <View style={styles.texton}>
                         <Image source={VECTOR} style={styles.image}></Image>
                         <Text style={styles.textfive}>{item.currency}</Text>
                       </View>
                       <View style={styles.iconsone}>
                         <View style={styles.texts1}>
                           <Icon
                             name="eyeo"
                             size={15}
                             color="black"
                             style={styles.icons}
                           />
                         </View>
                         <View style={styles.texts}>
                           <Icon
                             name="hearto"
                             size={15}
                             color="black"
                             style={styles.icons}
                           />
                         </View>
       
                         <View style={styles.texts}>
                           <Icon
                             name="shoppingcart"
                             size={15}
                             color="black"
                             style={styles.icons}
                           />
                         </View>
                       </View>
                     </View>
                   </View>
                 </Card.Content>
               </Card>
           </View>
    ) 
})}
   
  
    

       
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  texts: {
    marginTop: 14,
    backgroundColor: "#ecebed",
    height: 23,
    width: 23,
    borderRadius: 6,
    marginLeft: 5,
  },
  texts1: {
    marginTop: 14,
    backgroundColor: "#ecebed",
    height: 22,
    width: 22,
    borderRadius: 6,
  },
  text: {
    fontSize: 10,
    marginLeft: 5,
  },
  icons: {
    marginLeft: 3,
    marginTop: 3,
  },
  icon: {
    flexDirection: "row",
    marginTop: 3,
  },
  image: {
    marginTop: 3,
    height: 19,
  },
  container: {
    // display: "flex",
    // flexDirection: "row",
    marginLeft: 20,
  },

  card: {
    display: "flex",
    // height: 155,
    width:"100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#51c0d6",
    marginTop:30,
   
   
  },
  cardcover: {
    padding: 6,
    marginRight: 9,
  },

  CardText: {
    display: "flex",
    flexDirection: "row",
  },
  textone: {
    flexDirection: "row",
    marginTop: 12,
  },
  texton: {
    flexDirection: "row",
  },
  textthree: {
    fontSize: 11,
    marginTop: 4,
  },
  textfour: {
    marginLeft: 5,
    fontSize: 16,
  },
  textfive: {
    marginLeft: 5,
  },

  iconsone: {
    flexDirection: "row",
  },
  star: {
    display: "flex",
    flexDirection: "row",
  },
});
export default Cards;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use a specific icon library, e.g., FontAwesome

const Icons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contain}>Hello, this is an icon:</Text>
      <View style={styles.container1}>

      <Icon name="cloud" size={30} color="skyblue"  />
      <Icon name="instagram" size={30} color="#b0095f"  />
      <Icon name="twitter" size={30} color="lightblue"  />
      <Icon name="whatsapp" size={30} color="green"  />
      <Icon name="facebook" size={30} color="#1082e0"  />
      <Icon name="bell" size={30} color="grey"  />
      <Icon name="check" size={30} color="lightgreen"  />
      <Icon name="telegram" size={30} color="skyblue"  />
      <Icon name="google" size={30} color="red"  />
      <Icon name="snapchat" size={30} color="yellow"  />
      <Icon name="chrome" size={30} color="red"  />
      <Icon name="laptop" size={30} color="grey"  />
      <Icon name="mobile" size={50} color="black"  />
      <Icon name="android" size={30} color="green"  />
      <Icon name="apple" size={30} color="silver"  />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
   
  },
  container1:{
    marginTop:20
  },
  contain:{
    color:"blue",
    fontWeight:"bold",
    fontSize:22

  }
});

export default Icons;

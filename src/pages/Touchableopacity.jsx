import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TouchableOpacityExample = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>TouchableOpacity</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
      
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"pink"
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    width:250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:25
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  countContainer: {
    marginTop: 20,
  },
  countText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  Text:{
    color:"blue",
    marginBottom:20,
    fontWeight:"bold"
  }
});

export default TouchableOpacityExample;

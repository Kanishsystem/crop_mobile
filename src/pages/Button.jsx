import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Checkbox, Dialog, FAB, TextInput, Title, Paragraph, Snackbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
const Paper = () => {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.contain}>
          <Title style={styles.contains}>Welcome to React Native Paper</Title>
          <Paragraph style={styles.contains}>Enhance your app with beautiful components!</Paragraph>
          </View>
        
    
          <Button style={styles.container1} icon="camera" mode="contained" onPress={()=>console.log("Button Pressed")}>
            Take a Photo
          </Button>
          </View>
          </SafeAreaView>   

         
    )}


    const styles = StyleSheet.create({
        container: {
          height:870,
          width:360,
      
          backgroundColor:"lightpink"
        },

        container1:{
          height:40,
          width:300,
          justifyContent:"center",
          marginTop:20,
          marginLeft:28,
          backgroundColor:"blue"
         
        },

        contain:{
          marginTop:250,
          marginLeft:28,
        

        },
        contains:{
          color:"green"
        },
        
      });
      
      export default Paper;
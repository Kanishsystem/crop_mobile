import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const Apps = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Home Screen" />
      </Appbar.Header>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your home screen content goes here.</Text>
      </View>
    </View>
  );
};

export default Apps;


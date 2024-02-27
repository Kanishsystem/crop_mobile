import React from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';

const Fab = () => {
  const onPressHandler = () => {
    // Handle FAB press event
    console.log('FAB Pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     

      <FAB
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        icon="plus"
        onPress={onPressHandler}
      />
    </View>
  );
};
export default Fab;

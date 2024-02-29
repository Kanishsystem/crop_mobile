import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Mycheck = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <CheckBox
        title='Dancing'
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
      />
      <CheckBox
        title='Cooking'
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
      />
      <CheckBox
        title='Singing'
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
      />
    </View>
    
  );
};

export default Mycheck;

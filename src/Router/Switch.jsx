import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const Switchone = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Switch State: {isEnabled ? "ON" : "OFF"}</Text>
      <Switch
        trackColor={{ false: "grey", true: "blue" }}
        thumbColor={isEnabled ? "green" : "white"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "blue",
  },
});

export default Switchone;

import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";

const Dial = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <View style={{marginTop:250,}}>
      <Button title="Show Dialog" onPress={showModal} />

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text style={{ marginBottom:17 }}>This is the content of the dialog.</Text>
            <Button color="pink" title="Close" onPress={hideModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dial;

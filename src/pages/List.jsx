import React from 'react';
import { View, Text, FlatList } from 'react-native';

const List = () => {
  const data = [
    { id: '1', title: 'Name:' },
    { id: '2', title: "Department:"},
    { id: '3', title: "Institution:" },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 3, borderBottomColor: 'blue',  }}>
      <Text  style={{ marginTop:30 }}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    
    />
  );
};

export default List;

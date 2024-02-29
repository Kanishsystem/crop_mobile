import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const search_bar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        

        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          onChangeText={handleSearch}
          value={search}
        />
        <Icon name="search" size={20} color="black" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
    backgroundColor:"grey"
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    padding: 8,
    width:350,
    marginTop:200,
    marginLeft:20,
    backgroundColor:"white"
  },
  icon: {
   marginRight:30
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft:20,
    
  },
});

export default search_bar;

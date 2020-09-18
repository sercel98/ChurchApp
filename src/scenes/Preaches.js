import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Preaches(props) {
  
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Text>Hola Preaches</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

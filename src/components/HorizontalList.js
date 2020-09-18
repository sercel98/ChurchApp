import React from "react";
import { StyleSheet, Image, View, FlatList } from "react-native";

const HorizontalList = ({ data }) => {
  return (
    <FlatList
      style={styles.itemList}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      renderItem={renderCards}
      data={data}
    />
  );
};

const styles = StyleSheet.create({
  itemList: {
    marginVertical: 8,
  },
});

const renderCards = ({ item }) => {
  return (
    <Image
      style={{ width: 140, height: 140 }}
      source={{ uri: item.image }}
    ></Image>
  );
};

export default HorizontalList;

import React from "react";
import { StyleSheet, Image, View, FlatList } from "react-native";
import HomeCard from "../components/HomeCard";

const HorizontalList = ({ data }) => {
  return (
    <FlatList
      style={styles.itemList}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
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
      <HomeCard item={item}></HomeCard>
  );
};

export default HorizontalList;

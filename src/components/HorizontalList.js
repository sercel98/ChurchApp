import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import HomeCard from "../components/HomeCard";

export default function HorizontalList(props) {
  const { data, type } = props;
  const renderCards = ({ item, index }) => {
    console.log("HOMECARD", type);
    return <HomeCard item={item} index={index} type={type}></HomeCard>;
  };
  return (
    <FlatList
      style={styles.itemList}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
      renderItem={renderCards}
      data={data}
      keyExtractor={(item, index) => item.key}
    />
  );
}

const styles = StyleSheet.create({
  itemList: {
    marginVertical: 8,
  },
});

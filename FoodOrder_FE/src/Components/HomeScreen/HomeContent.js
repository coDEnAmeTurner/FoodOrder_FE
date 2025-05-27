import { FlatList, View, ActivityIndicator, Text } from "react-native";
import HomeItem from "./HomeItem"
import React from "react";

export const HomeContent = React.memo(function home_content ({list}) {
  return <FlatList
    data={list}
    ListEmptyComponent={() => (
      <View>
        <ActivityIndicator style={{ marginTop: 300 }} size='50' />
        <Text style={{ textAlign: "center", fontSize: 16, color: 'white' }}>    Loading...</Text>
      </View>
    )}
    renderItem={({ item, index, separators }) => (
      <HomeItem separators={separators} index={index} item={item} />
    )} />;
});

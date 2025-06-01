import { FlatList, View, ActivityIndicator, Text , RefreshControl } from "react-native";
import HomeItem from "./HomeItem";
import React, { useCallback } from "react";


export const HomeContent = React.memo(function useHomeContent({ list, refreshState }) {
  const [refreshing, setRefreshing] = refreshState

  const onRefresh = useCallback(()=>{
    setRefreshing(true)
  },[])

  return (
    <FlatList
      style={{ width: "100%" }}
      data={list}
      ListEmptyComponent={() => (
        <View>
          <ActivityIndicator style={{ marginTop: 300 }} size="50" />
          <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}>
            {" "}
            Loading...
          </Text>
        </View>
      )}
      renderItem={({ item, index, separators }) => (
        <HomeItem separators={separators} index={index} item={item} />
      )}
      refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} 
            />}
    />
  );
});

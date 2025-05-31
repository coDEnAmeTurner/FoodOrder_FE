import { View, Text, ActivityIndicator } from "react-native";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";

const Overview = ({item}) => {
  return (
    item?
    <View>
      <Text numberOfLines={1} style={displayItemStyles.displayName}>
        {item.name}
      </Text>
      <Text style={{ fontStyle: "italic" }}>Press for more detail</Text>
      <Text>Khoảng cách</Text>
      <Text>Đánh giá</Text>
      <Text>{item.price} VND</Text>
    </View>:<ActivityIndicator size={"large"}/>
  );
};

export default Overview;

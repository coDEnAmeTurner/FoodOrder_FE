import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";
import { TouchableHighlight, View, Text, Image } from "react-native";

const HomeItem = ({separators, index, item}) => {
  return (
  <TouchableHighlight
    style={[displayItemStyles.displayItem]}
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={() => { }}
    onShowUnderlay={separators.highlight}
    onHideUnderlay={separators.unhighlight}
    key={index}
  >
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={{ flex: 4 }}>
        <View>
          <Text style={displayItemStyles.displayName}>{item.name}</Text>
          <Text>Khoảng cách</Text>
          <Text>Đánh giá</Text>
          <Text>{item.price * 1000} VND</Text>
        </View>
      </View>
      <View style={displayItemStyles.displayDishPic}>
        <Image source={item.picture || require("../../../assets/images/favicon.png")} />
      </View>
    </View>
  </TouchableHighlight>)
};

export default HomeItem;
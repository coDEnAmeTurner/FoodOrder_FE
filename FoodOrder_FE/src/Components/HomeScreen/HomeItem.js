import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";
import { useState, useRef } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

const HomeItem = ({ separators, index, item }) => {
  const [showActions, setShowActions] = useState(false);

  const contentWidth = useRef(new Animated.Value(100)).current;
  const actionsWidth = useRef(new Animated.Value(0)).current;

  const doShowActions = () => {
    setShowActions(!showActions);

    contentWidth.setValue(100);
    actionsWidth.setValue(0);

    Animated.parallel([
      Animated.timing(contentWidth, {
        toValue: 70,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(actionsWidth, {
        toValue: 30,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={displayItemStyles.outerDItem}>
      <Animated.View
        style={[
          displayItemStyles.displayItem,
          {
            width: contentWidth.interpolate({
              inputRange: [70, 100],
              outputRange: ["70%", "100%"],
            }),
          },
        ]}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 4 }}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPressIn={doShowActions}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              key={index}
            >
              <View>
                <Text style={displayItemStyles.displayName}>{item.name}</Text>
                <Text>Khoảng cách</Text>
                <Text>Đánh giá</Text>
                <Text>{item.price} VND</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={displayItemStyles.displayDishPic}>
            <Image
              source={
                item.picture || require("../../../assets/images/favicon.png")
              }
            />
          </View>
        </View>
      </Animated.View>
      {showActions ? (
        <Animated.View
          style={[
            displayItemStyles.outerActionsStyle,
            {
              width: actionsWidth.interpolate({
                inputRange: [0, 30],
                outputRange: ["0%", "30%"],
              }),
            },
          ]}
        >
          <TouchableOpacity
            style={[
              displayItemStyles.actionStyle,
              { backgroundColor: "#0000CD" },
            ]}
          >
            <Text style={displayItemStyles.actionText}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              displayItemStyles.actionStyle,
              { backgroundColor: "#006400" },
            ]}
          >
            <Text style={displayItemStyles.actionText}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              displayItemStyles.actionStyle,
              { backgroundColor: "#FF00FF" },
            ]}
          >
            <Text style={displayItemStyles.actionText}>Favorite</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default HomeItem;

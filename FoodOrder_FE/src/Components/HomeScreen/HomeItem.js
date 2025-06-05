import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";
import { useState, useEffect, useContext } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";


import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ActionsShowType, PREFIX } from "./HomeCommon";
import Icon from "@react-native-vector-icons/ionicons";
import Overview from "./Detail/Overview";
import { orderFormIDContext } from "@/src/Context/OrderFormIDContext";

const HomeItem = ({ separators, index, item }) => {
  const [showActions, setShowActions] = useState(ActionsShowType.NOT_SHOW);
  const [parentWidth, setParentWidth] = useState(0);
  const contentPercent = useSharedValue(0.95);
  const actionsPercent = useSharedValue(0.1);
  const [orderFormID, orderFormIDDispatch] = useContext(orderFormIDContext);

  const contentWidthStyle = useAnimatedStyle(() => {
    if (parentWidth === 0) return {};
    return {
      width: parentWidth * contentPercent.value,
    };
  });

  const actionsWidthStyle = useAnimatedStyle(() => {
    if (parentWidth === 0) return {};
    return {
      width: parentWidth * actionsPercent.value,
    };
  });

  const doShowActions = () => {
    const newState =
      showActions === ActionsShowType.NOT_SHOW
        ? ActionsShowType.SHOW
        : ActionsShowType.NOT_SHOW;
    setShowActions(newState);
  };

  useEffect(() => {
    if (showActions === ActionsShowType.SHOW) {
      contentPercent.value = withTiming(0.65, { duration: 300 });
      actionsPercent.value = withTiming(0.27, { duration: 300 });
    } else {
      contentPercent.value = withTiming(0.95, { duration: 300 });
      actionsPercent.value = withTiming(0.1, { duration: 300 });
    }
  }, [actionsPercent, contentPercent, showActions]);

  return (
    <View>
      <View
        style={displayItemStyles.outerDItem}
        onLayout={(e) => setParentWidth(e.nativeEvent.layout.width)}
      >
        <Animated.View
          style={[displayItemStyles.displayItem, contentWidthStyle]}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 4, justifyContent: "center" }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={doShowActions}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
                key={index}
                style={{
                  borderRadius: 20,
                }}
              >
                <Overview item={item} />
              </TouchableHighlight>
            </View>
            <View style={displayItemStyles.displayDishPic}>
              <Image
                source={{
                  uri: item.picture
                    ? item.picture.substring(PREFIX.length)
                    : require("../../../assets/images/favicon.png"),
                }}
                style={displayItemStyles.imageStyle}
              />
            </View>
          </View>
        </Animated.View>
        {showActions === ActionsShowType.SHOW ? (
          <Animated.View
            style={[displayItemStyles.outerActionsStyle, actionsWidthStyle]}
          >
            <Link
              href={{
                pathname: "/dishs/[id]",
                params: {
                  id: item.id,
                },
              }}
              style={[displayItemStyles.linkWrapper]}
            >
              <View
                style={[
                  displayItemStyles.actionStyle,
                  { backgroundColor: "#0000CD" },
                ]}
              >
                <Text style={displayItemStyles.actionText}>Detail</Text>
                <Icon
                  name="eye-outline"
                  style={displayItemStyles.actionIcon}
                ></Icon>
              </View>
            </Link>
            <TouchableOpacity
              style={[
                displayItemStyles.linkWrapper,
                { position: "relative", right: "50%" },
              ]}
              onPress={() => {
                // console.log(orderFormIDDispatch)
                orderFormIDDispatch({type:'set', payload: {id:item?.id, itemType:'DISH' }});
              }}
            >
              <View
                style={[
                  displayItemStyles.actionStyle,
                  { backgroundColor: "#006400" },
                ]}
              >
                <Text style={displayItemStyles.actionText}>Order</Text>
                <Icon
                  name="cash-outline"
                  style={displayItemStyles.actionIcon}
                ></Icon>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default HomeItem;

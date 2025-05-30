import { View, TouchableOpacity, Text, Animated, Easing } from "react-native";
import { otherQueryStyles } from "../../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import Icon from "@react-native-vector-icons/ionicons";
import { useContext, useRef } from "react";
import { filterTypeContext } from "@/src/Context/FilterTypeContext";

const FilterItem = ({ typeEnum, children }) => {
  const [filterType, dispatchFilterType] = useContext(filterTypeContext);
  const translateY = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const setFilterType = () => {
    dispatchFilterType({
      type: filterType !== typeEnum ? "set" : "unset",
      payload: typeEnum,
    });

    translateY.setValue(0);
    animatedOpacity.setValue(0);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 45, // Move down 40 pixels
        duration: 500,
        easing:Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 1, // Move down 40 pixels
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  };

  return (
    <>
      <TouchableOpacity
        style={[otherQueryStyles.otherQueryComp]}
        onPressIn={setFilterType}
      >
        <Text style={otherQueryStyles.otherQueryText}>{typeEnum}</Text>
        <Icon
          style={otherQueryStyles.otherQueryText}
          name={`chevron-${filterType === typeEnum ? "down" : "up"}-outline`}
        />
      </TouchableOpacity>
      {filterType === typeEnum ? (
        <Animated.View
          style={[
            otherQueryStyles.popUpStyle,
            {
              opacity:animatedOpacity,
              transform: [{ translateY }],
            },
          ]}
        >
          {children}
        </Animated.View>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilterItem;

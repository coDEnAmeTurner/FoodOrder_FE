import { View, TouchableOpacity, Text } from "react-native";
import { otherQueryStyles } from "../../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import Icon from "@react-native-vector-icons/ionicons";
import { useContext } from "react";
import { filterTypeContext } from "@/src/Context/FilterTypeContext";

const FilterItem = ({ typeEnum, children }) => {
  const [filterType, dispatchFilterType] = useContext(filterTypeContext);

  return (
    <>
      <TouchableOpacity
        style={[otherQueryStyles.otherQueryComp]}
        onPressIn={() =>
          dispatchFilterType({
            'type': filterType !== typeEnum ? "set" : "unset",
            'payload': typeEnum,
          })
        }
      >
        <Text style={otherQueryStyles.otherQueryText}>{typeEnum}</Text>
        <Icon
          style={otherQueryStyles.otherQueryText}
          name={`chevron-${filterType === typeEnum ? "down" : "up"}-outline`}
        />
      </TouchableOpacity>
      {filterType === typeEnum ? (
        <View style={otherQueryStyles.popUpStyle}>{children}</View>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilterItem;

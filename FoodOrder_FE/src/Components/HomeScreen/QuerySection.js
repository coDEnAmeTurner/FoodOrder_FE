import Icon from "@react-native-vector-icons/ionicons";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import {
  ToggleButton,
  otherQueryStyles,
  searchBarStyles,
} from "../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import { DisplayType } from "./HomeScreen";
import { Link } from "expo-router";

const QuerySection = ({
  searchFocus,
  setSearchFocus,
  searchStr,
  setSearchStr,
  displayType,
  setDisplayType,
  style,
}) => {
  return (
    <View style={style}>
      <View style={searchBarStyles.searchBar}>
        <View
          style={[
            searchBarStyles.searchInputView,
            searchFocus
              ? searchBarStyles.searchFocus
              : searchBarStyles.searchNonFocus,
          ]}
        >
          <TextInput
            placeholder="Bạn muốn ăn gì?"
            style={[searchBarStyles.searchInput]}
            onPressIn={(e) => setSearchFocus(true)}
            onBlur={(e) => setSearchFocus(false)}
            value={searchStr}
            onChangeText={(val) => setSearchStr(val)}
          />
          <Icon
            name="fast-food-outline"
            style={searchBarStyles.searchAdornment}
            color="#ffa500"
          />
        </View>
        <View style={searchBarStyles.toggleDTypeView}>
          <TouchableOpacity
            style={ToggleButton}
            onPressIn={() =>
              setDisplayType(
                displayType === DisplayType.DISH
                  ? DisplayType.MENU
                  : DisplayType.DISH
              )
            }
          >
            <Text style={ToggleButton.typeText}>
              {displayType === DisplayType.DISH ? "Dish" : "Menu"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={otherQueryStyles.otherQuery}>
        <Link href={"/priceselect"} style={[otherQueryStyles.otherQueryComp]}>
            <Text style={otherQueryStyles.otherQueryText}>Price</Text>
        </Link>
        <TouchableOpacity
          style={[otherQueryStyles.otherQueryComp, otherQueryStyles.avai]}
        >
          <Text style={otherQueryStyles.otherQueryText}>Available</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[otherQueryStyles.otherQueryComp, otherQueryStyles.daySession]}
        >
          <Text style={otherQueryStyles.otherQueryText}>Day Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuerySection;

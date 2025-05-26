import Icon from "@react-native-vector-icons/ionicons";
import { TextInput, View } from "react-native";
import homeScreenStyle from "../../stylesheets/HomeScreenStyle/HomeScreenStyle";

const QuerySection = ({searchFocus, setSearchFocus, searchStr, setSearchStr}) => {
  return <View style={homeScreenStyle.searchBar}>
    <View
      style={[
        homeScreenStyle.searchInputView,
        searchFocus
          ? homeScreenStyle.searchFocus
          : homeScreenStyle.searchNonFocus,
      ]}
    >
      <TextInput
        placeholder="Bạn muốn ăn gì?"
        style={[homeScreenStyle.searchInput]}
        onPressIn={(e) => setSearchFocus(true)}
        onBlur={(e) => setSearchFocus(false)}
        value={searchStr}
        onChangeText={(val) => setSearchStr(val)} />
      <Icon
        name="fast-food-outline"
        style={homeScreenStyle.searchAdornment}
        color="#ffa500" />
    </View>
    <View style={homeScreenStyle.searchInputSide}></View>
  </View>;
}

export default QuerySection;
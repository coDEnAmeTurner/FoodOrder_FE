import { TextInput, TouchableOpacity, View, Text } from "react-native";
import {
  ToggleButton,
  otherQueryStyles,
  searchBarStyles,
} from "../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import { useReducer } from "react";
import { FilterType, DisplayType } from "./HomeCommon";
import FilterItem from "./Filter/FilterItem";
import PriceFilterContent from "./Filter/PriceFilterContent";
import AvailableFilterContent from "./Filter/AvailableFilterContent";
import DaySessionFilterContent from "./Filter/DaySessionFilterContent";
import FilterTypeReducer, {
  filterTypeContext,
} from "../../Context/FilterTypeContext";
import Icon from "@react-native-vector-icons/ionicons";
import { router, useRouter } from "expo-router";

const QuerySection = ({
  searchFocus,
  setSearchFocus,
  searchStr,
  setSearchStr,
  displayType,
  setDisplayType,
  style,
  priceState,
  avaiState,
  daySessionState,
}) => {
  const [filterType, dispatchFilterType] = useReducer(
    FilterTypeReducer,
    FilterType.NONE
  );

  const router = useRouter();

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
      <filterTypeContext.Provider value={[filterType, dispatchFilterType]}>
        <View style={otherQueryStyles.otherQuery}>
          <FilterItem typeEnum={FilterType.PRICE}>
            <PriceFilterContent priceState={[...priceState]} />
          </FilterItem>
          <FilterItem typeEnum={FilterType.AVAILABLE}>
            <AvailableFilterContent avaiState={[...avaiState]} />
          </FilterItem>
          <FilterItem typeEnum={FilterType.DAYSESSION}>
            <DaySessionFilterContent daySessionState={[...daySessionState]} />
          </FilterItem>
          {/* <TouchableOpacity 
            onPress={()=>{
              router.navigate({
                pathname:'/orders/vnpay_payment',
                params: {
                  orderID: 12
                }
              })
            }}
          ><Text>VNPAY</Text></TouchableOpacity> */}
        </View>
      </filterTypeContext.Provider>
    </View>
  );
};

export default QuerySection;

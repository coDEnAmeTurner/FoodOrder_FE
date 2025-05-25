import { useEffect, useState } from "react";
import { View, Text, TextInput,FlatList, TouchableHighlight } from "react-native";
import homeScreenStyle, {displayItemStyles} from "../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import Icon from "@react-native-vector-icons/ionicons";
import {AUTH_TOKEN, authApi} from "../../APIs/AxiosInst";
import Endpoints from "../../APIs/Endpoints";
import axios from "axios";
import { Image } from "react-native";

// Home Screen will display:
//- A button to toggle between food and menu -> food and menu are state also
//
const DisplayType = {
  DISH: 0,
  MENU: 1,
};

const HomeScreen = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [displayType, setDisplayType] = useState(DisplayType.DISH);
  const [dishList, setDishList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [available, setAvailable] = useState(true);
  const [daySession, setDaySession] = useState('');

  useEffect(() => {
    async function GetDisplayList() {
      try {
        if (displayType === DisplayType.DISH) {
          const resp = await authApi(AUTH_TOKEN).get(Endpoints.GET_DISH + `?from_price=${fromPrice}&to_price=${toPrice}`);
          
          if (resp.status === 200) {
             setDishList(resp["data"]["results"])
          } else {
            throw Error(resp.data);
          }
        } else {
          const resp = await authApi(AUTH_TOKEN).get(
            Endpoints.GET_MENU +
              `?
                name=${searchStr}
              `
          );

          if (resp.status === 200) {
             setMenuList(resp.data.results)
          } else {
            throw Error(resp.data);
          }
        }
      }
      catch (ex) {
        if (axios.isAxiosError(ex)) {
          console.error("Axios Error", ex.message);
          console.error("Config", ex.config);
        } else {
          console.error(ex);
        }
      }
    }

    GetDisplayList();
    
    //searchStr, fromPrice, toPrice, available, daySession, displayType
  }, []);

  return (
    <View style={homeScreenStyle.homeScreen}>
      <View style={homeScreenStyle.searchBar}>
        <View style={homeScreenStyle.searchInputSide}></View>
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
            onChangeText={(val)=>setSearchStr(val)}
          />
          <Icon 
            name="fast-food-outline"
            style={homeScreenStyle.searchAdornment}
            color="#ffa500"
          />
        </View>
        <View style={homeScreenStyle.searchInputSide}></View>
      </View>
      <View style={homeScreenStyle.homeContent}>
        <FlatList
          data={dishList}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {}}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              key={index}
            >
              <View style={displayItemStyles.displayItem}>
                <View style={{flex:4}}>
                  <Text style={displayItemStyles.displayName}>{item.name}</Text>
                  <Text>Khoảng cách</Text>
                  <Text>Đánh giá</Text>
                  <Text>{item.price * 1000} VND</Text>
                </View>
                <View style={displayItemStyles.displayDishPic}>
                  <Image source={item.picture || require("../../../assets/images/favicon.png")}/>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

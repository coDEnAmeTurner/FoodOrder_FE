import { useEffect, useState } from "react";
import { View, Text,FlatList, TouchableHighlight } from "react-native";
import homeScreenStyle, {displayItemStyles} from "../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import {AUTH_TOKEN, authApi} from "../../APIs/AxiosInst";
import Endpoints from "../../APIs/Endpoints";
import axios from "axios";
import { Image, ActivityIndicator } from "react-native";
import QuerySection from "./QuerySection";

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
          const resp = await authApi(AUTH_TOKEN).get(Endpoints.GET_DISH + `?name=${searchStr}&from_price=${fromPrice}&to_price=${toPrice}&is_available=${available}&day_session=${daySession}`);
          
          if (resp.status === 200) {
             setDishList(resp.data.results)
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
    
  }, [searchStr, fromPrice, toPrice, available, daySession, displayType]);

  return (
    <View style={homeScreenStyle.homeScreen}>
      <QuerySection 
        searchFocus={searchFocus}
        setSearchFocus={setSearchFocus}
        searchStr={searchStr}
        setSearchStr={setSearchStr}
      />
      <View style={homeScreenStyle.homeContent}>
        <FlatList
          data={dishList}
          ListEmptyComponent={()=>(
            <View>
              <ActivityIndicator style={{marginTop:300}} size='50' />
              <Text style={{textAlign:"center", fontSize:16, color:'white'}}>    Loading...</Text>
            </View>
          )}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              style={[displayItemStyles.displayItem]}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {}}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              key={index}
            >
              <View style={{flexDirection:"row", flex:1}}>
                <View style={{flex:4}}>
                  <View >
                    <Text style={displayItemStyles.displayName}>{item.name}</Text>
                    <Text>Khoảng cách</Text>
                    <Text>Đánh giá</Text>
                    <Text>{item.price * 1000} VND</Text>
                  </View>
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



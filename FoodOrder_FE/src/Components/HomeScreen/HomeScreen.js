import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, View } from "react-native";
import homeScreenStyles, {
  homeContentStyles,
  querySectionStyles,
} from "../../stylesheets/HomeScreenStyle/HomeScreenStyle";
import { AUTH_TOKEN, authApi } from "../../APIs/AxiosInst";
import Endpoints from "../../APIs/Endpoints";
import axios from "axios";
import QuerySection from "./QuerySection";
import { DisplayType } from "./HomeCommon";
import { HomeContent } from "./HomeContent";

// Home Screen will display:
//- A button to toggle between food and menu -> food and menu are state also
//

const HomeScreen = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [displayType, setDisplayType] = useState(DisplayType.DISH);
  const [dishList, setDishList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const [daySession, setDaySession] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const GetDisplayList = useCallback(() => {
    async function GetDisplayList() {
      try {
        if (displayType === DisplayType.DISH) {
          const resp = await authApi(AUTH_TOKEN).get(
            Endpoints.LIST_DISH +
              `?name=${searchStr}&from_price=${Number(
                fromPrice
              )}&to_price=${Number(toPrice)}&is_available=${
                available ? 1 : 0
              }&day_session=${daySession}`
          );

          if (resp.status === 200) {
            setDishList(resp["data"]["results"]);
          } else {
            throw Error(resp.data);
          }
        } else {
          const resp = await authApi(AUTH_TOKEN).get(
            Endpoints.GET_MENU + `?name=${searchStr}`
          );

          if (resp.status === 200) {
            setMenuList(resp.data.results);
          } else {
            throw Error(resp.data);
          }
        }
      } catch (ex) {
        if (axios.isAxiosError(ex)) {
          console.error("Axios Error", ex.message);
          console.error("Config", ex.config);
        } else {
          console.error(ex);
        }
      }
    }

    GetDisplayList();
  }, []);

  useEffect(() => {
    GetDisplayList()

  }, [searchStr, fromPrice, toPrice, available, daySession, displayType, GetDisplayList]);

  useEffect(()=>{
    if (refreshing === true) {
      GetDisplayList()
      setRefreshing(false)
    }
  }, [searchStr, fromPrice, toPrice, available, daySession, displayType, GetDisplayList, refreshing])

  return (
    <View style={homeScreenStyles.homeScreen}>
      <QuerySection
        style={querySectionStyles.querySection}
        searchFocus={searchFocus}
        setSearchFocus={setSearchFocus}
        searchStr={searchStr}
        setSearchStr={setSearchStr}
        displayType={displayType}
        setDisplayType={setDisplayType}
        priceState={[fromPrice, setFromPrice, toPrice, setToPrice]}
        avaiState={[available, setAvailable]}
        daySessionState={[daySession, setDaySession]}
      />

      <View style={homeContentStyles.homeContent}>
        {dishList === null && menuList === null ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <HomeContent
            list={displayType === DisplayType.DISH ? dishList : menuList}
            refreshState={[refreshing, setRefreshing]}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

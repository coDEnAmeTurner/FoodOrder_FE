import { AUTH_TOKEN, authApi } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { DishDetailStyle } from "../../../../stylesheets/HomeScreenStyle/DetailStyle/DishDetailStyle";
import { PREFIX } from "../../HomeCommon";
import Overview from "../Overview";
import Popup from "../Popup";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";

const DishDetail = ({ dishId }) => {
  const [element, setElement] = useState(null);
  const [shopOwner, setShopOwner] = useState(null);
  const [imgPop, setImgPop] = useState(false);

  useEffect(() => {
    async function retrieve() {
      try {
        const resp = await authApi(AUTH_TOKEN).get(
          Endpoints.RETRIEVE_DISH(dishId)
        );

        if (resp.status === 200) {
          setElement(resp.data);
          setShopOwner(resp.data.shop);
        } else {
          throw Error(resp.data);
        }
      } catch (ex) {
        console.log(Error(ex).message);
      }
    }

    retrieve();
  }, []);

  return (
    <View style={DishDetailStyle.dishDetail}>
      {element === null ? (
        <View>
          <ActivityIndicator size={"large"} color={"orange"} />
          <Text style={{ textAlign: "center" }}> ...Loading</Text>
        </View>
      ) : (
        <>
          <View style={DishDetailStyle.dishOverview}>
            <View style={DishDetailStyle.dishPicture}>
              <Popup animationType={"fade"} visibleState={[imgPop, setImgPop]} isSpotLight={true}>
                <View style={displayItemStyles.imgPopContent}>
                  <Image
                  source={
                    element && element.picture
                      ? { uri: element.picture.substring(PREFIX.length) }
                      : require("@/assets/images/favicon.png")
                  }
                  style={DishDetailStyle.imageLargeComp}
                  resizeMode="contain"
                />  
                </View>
              </Popup>
              <TouchableOpacity onPressIn={()=>{setImgPop(!imgPop)}}>
                <Image
                  source={
                    element && element.picture
                      ? { uri: element.picture.substring(PREFIX.length) }
                      : require("@/assets/images/favicon.png")
                  }
                  style={DishDetailStyle.imageComp}
                />
              </TouchableOpacity>
            </View>
            <View style={DishDetailStyle.dishDescr}>
              <Overview
                allowPopup={true}
                item={element}
                pressGuide={false}
                nameSize={30}
                shop={shopOwner}
                descrSize={24}
                descContentStyle={{
                  height: 162,
                  paddingLeft: 9,
                  paddingTop: 9,
                }}
              />
            </View>
          </View>
          <View style={DishDetailStyle.dishContent}></View>
        </>
      )}
    </View>
  );
};

export default DishDetail;

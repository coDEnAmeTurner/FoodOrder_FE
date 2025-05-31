import { AUTH_TOKEN, authApi } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { DishDetailStyle } from "../../../../stylesheets/HomeScreenStyle/DetailStyle/DishDetailStyle";
import { PREFIX } from "../../HomeCommon";

const DishDetail = ({ dishId }) => {
  const [element, setElement] = useState(null);
  const [shopOwner, setShopOwner] = useState(null);

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
      <View style={DishDetailStyle.dishOverview}>
        <View style={DishDetailStyle.dishPicture}>
          <Image
            source={
              element && element.picture
                ? { uri: element.picture.substring(PREFIX.length) }
                : require("@/assets/images/favicon.png")
            }
            style={DishDetailStyle.imageComp}
          />
        </View>
        <View style={DishDetailStyle.dishDescr}></View>
      </View>
      <View style={DishDetailStyle.dishContent}></View>
    </View>
  );
};

export default DishDetail;

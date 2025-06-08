/* eslint-disable react-hooks/exhaustive-deps */
import { AUTH_TOKEN, authApi } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import { useEffect, useState, useCallback, useReducer } from "react";
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
import Icon from "@react-native-vector-icons/ionicons";
import CommentList from "../Comment/CommentList";
import DishElementReducer, {
  dishElementContext,
} from "@/src/Context/DishElementContext";
import CommentListReducer, {
  commentListContext,
} from "@/src/Context/CommentListContext";
import {
  CommentStyle,
  CommentDetailStyle,
} from "@/src/stylesheets/HomeScreenStyle/DetailStyle/CommentStyle";
import RateBar from "../RateBar";
import CommentDetail from "../Comment/CommentDetail";
import OrderForm from "../../../OrderScreen/OrderForm";
import OrderFormIDReducer, {
  orderFormIDContext,
} from "@/src/Context/OrderFormIDContext";

const DishDetail = ({ dishId }) => {
  const [element, elementDispatch] = useReducer(DishElementReducer, []);
  const [shopOwner, setShopOwner] = useState(null);
  const [comments, commentsDispatch] = useReducer(CommentListReducer, []);
  const [imgPop, setImgPop] = useState(false);
  const [actDisplay, setActDisplay] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [detailID, setDetailID] = useState(NaN);
  const [orderFormID, orderFormIDDispatch] = useReducer(
    OrderFormIDReducer,
    null
  );

  const onRefreshComments = useCallback(async (id) => {
    try {
      const resp = await authApi(AUTH_TOKEN).get(
        Endpoints.LIST_COMMENTS_BY_DISH(id)
      );

      if (resp.status === 200) {
        commentsDispatch({
          type: "set",
          payload: resp.data,
        });
      } else {
        throw Error(resp.data);
      }
    } catch (ex) {
      console.log(Error(ex).message);
    }
  }, []);

  useEffect(() => {
    async function retrieve() {
      try {
        const resp = await authApi(AUTH_TOKEN).get(
          Endpoints.RETRIEVE_DISH(dishId)
        );

        if (resp.status === 200) {
          elementDispatch({
            type: "set",
            payload: resp.data,
          });
          setShopOwner(resp.data.shop);
          await onRefreshComments(resp.data.id);
        } else {
          throw Error(resp.data);
        }
      } catch (ex) {
        console.log(Error(ex).message);
      }
    }

    retrieve();
  }, [dishId]);

  return (
    <orderFormIDContext.Provider value={[orderFormID, orderFormIDDispatch]}>
      <View style={DishDetailStyle.dishDetail}>
        <Popup
          animationType={"fade"}
          visibleState={[imgPop, setImgPop]}
          isSpotLight={true}
        >
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
        <Popup
          isSpotLight={true}
          animationType={"slide"}
          visibleState={[actDisplay, setActDisplay]}
        >
          <RateBar
            starState={[starCount, setStarCount]}
            containerStyle={CommentStyle.ratePopup}
            iconStyle={CommentStyle.rateIcon}
          />
        </Popup>
        <Popup
          animationType={"slide"}
          visibleState={[
            orderFormID,
            () => orderFormIDDispatch({ type: "set", payload: null }),
          ]}
          isSpotLight={true}
        >
          <OrderForm />
        </Popup>
        <Popup
          animationType={"fade"}
          visibleState={[detailID, setDetailID]}
          isSpotLight={true}
        >
          <CommentDetail
            containerStyle={CommentDetailStyle.container}
            detailIDState={[detailID, setDetailID]}
          />
        </Popup>
        {element === null ? (
          <View>
            <ActivityIndicator size={"large"} color={"orange"} />
            <Text style={{ textAlign: "center" }}> ...Loading</Text>
          </View>
        ) : (
          <>
            <View style={DishDetailStyle.dishOverview}>
              <View style={DishDetailStyle.dishPicture}>
                <TouchableOpacity
                  onPressIn={() => {
                    setImgPop(!imgPop);
                  }}
                >
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
                  descrSize={17}
                  descContentStyle={{
                    paddingLeft: 9,
                    paddingTop: 9,
                  }}
                />
              </View>
            </View>
            <View style={DishDetailStyle.detailActions}>
              <TouchableOpacity
                onPress={() => {
                  orderFormIDDispatch({
                    type: "set",
                    payload: { id: element.id, itemType: "DISH" },
                  });
                }}
                style={[
                  DishDetailStyle.actionButton,
                  { backgroundColor: "green" },
                ]}
              >
                <Text style={displayItemStyles.actionText}>Order</Text>
                <Icon
                  name="cash-outline"
                  style={displayItemStyles.actionIcon}
                ></Icon>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  DishDetailStyle.actionButton,
                  { backgroundColor: "#FF8C00" },
                ]}
                onPressIn={() => {
                  setActDisplay(!actDisplay);
                }}
              >
                <Text>Rate </Text>
                <Icon
                  name="star-outline"
                  style={displayItemStyles.actionIcon}
                ></Icon>
              </TouchableOpacity>
            </View>
            <View style={DishDetailStyle.dishContent}>
              <View style={{ alignItems: "center", marginBottom: 7 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "brown",
                    borderColor: "red",
                    borderWidth: 1,
                    width: "52%",
                  }}
                >
                  Comment Section
                </Text>
              </View>
              {comments === null || element === null || comments.length < 1 ? (
                <ActivityIndicator size={"large"} color={"orange"} />
              ) : (
                <commentListContext.Provider
                  value={[comments, commentsDispatch]}
                >
                  <dishElementContext.Provider
                    value={[element, elementDispatch]}
                  >
                    <CommentList
                      detailIDState={[detailID, setDetailID]}
                      onRefreshComments={onRefreshComments}
                    />
                  </dishElementContext.Provider>
                </commentListContext.Provider>
              )}
            </View>
          </>
        )}
      </View>
    </orderFormIDContext.Provider>
  );
};

export default DishDetail;

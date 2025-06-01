/* eslint-disable react-hooks/exhaustive-deps */
import { AUTH_TOKEN, authApi } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import { DishDetailStyle } from "../../../../stylesheets/HomeScreenStyle/DetailStyle/DishDetailStyle";
import { PREFIX } from "../../HomeCommon";
import Overview from "../Overview";
import Popup from "../Popup";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";
import Icon from "@react-native-vector-icons/ionicons";
import CommentItem from "../CommentItem/CommentItem";
import { CommentStyle } from "@/src/stylesheets/HomeScreenStyle/DetailStyle/CommentStyle";

const DishDetail = ({ dishId }) => {
  const [element, setElement] = useState(null);
  const [shopOwner, setShopOwner] = useState(null);
  const [comments, setComments] = useState([]);
  const [comRefreshing, setComRefreshing] = useState(false);
  const [imgPop, setImgPop] = useState(false);
  const [actDisplay, setActDisplay] = useState(false);

  const onRefreshComments = useCallback(async (id) => {
    try {
      const resp = await authApi(AUTH_TOKEN).get(
        Endpoints.LIST_COMMENTS_BY_DISH(id)
      );

      if (resp.status === 200) {
        setComments(resp.data);
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
          setElement(resp.data);
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
  }, []);

  useEffect(() => {
    if (comRefreshing === true) {
      async function commentsRetrieve() {
        onRefreshComments();
      }

      commentsRetrieve();

      setComRefreshing(false);
    }
  }, [comRefreshing]);

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
                animationType={"slide"}
                visibleState={[actDisplay, setActDisplay]}
              >
                <View style={CommentStyle.ratePopup}>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon
                      name="star-outline"
                      style={CommentStyle.rateIcon}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon
                      name="star-outline"
                      style={CommentStyle.rateIcon}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon
                      name="star-outline"
                      style={CommentStyle.rateIcon}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon
                      name="star-outline"
                      style={CommentStyle.rateIcon}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon
                      name="star-outline"
                      style={CommentStyle.rateIcon}
                    ></Icon>
                  </TouchableOpacity>
                </View>
              </Popup>
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
                { backgroundColor: "#FF00FF" },
              ]}
            >
              <Text style={displayItemStyles.actionText}>Favorite</Text>
              <Icon
                name="heart-outline"
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
              <Text>Rate  </Text>
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
            <FlatList
              nestedScrollEnabled
              style={{ width: "100%" }}
              data={comments}
              ListEmptyComponent={() => (
                <View>
                  <ActivityIndicator style={{ marginTop: 300 }} size="50" />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "black",
                    }}
                  >
                    {" "}
                    Loading...
                  </Text>
                </View>
              )}
              renderItem={({ item, index, separators }) => (
                <CommentItem
                  item={item}
                  index={index}
                  separators={separators}
                />
              )}
              refreshControl={
                <RefreshControl
                  refreshing={comRefreshing}
                  onRefresh={() => {
                    setComRefreshing(true);
                  }}
                />
              }
            />
          </View>
        </>
      )}
    </View>
  );
};

export default DishDetail;

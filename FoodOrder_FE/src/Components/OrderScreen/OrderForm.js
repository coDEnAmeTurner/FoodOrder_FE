import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  OrderFormContainer,
  OrderFormControl,
} from "@/src/stylesheets/HomeScreenStyle/OrderStyle/OrderFormStyle";
import { useContext, useEffect, useState , useRef } from "react";
import { orderFormIDContext } from "@/src/Context/OrderFormIDContext";
import HomeItem from "../HomeScreen/HomeItem";
import { authApi, AUTH_TOKEN } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import { PurchaseType } from "@/src/Components/Common";
import Icon from "@react-native-vector-icons/ionicons";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

const OrderForm = ({
  fromConfirm = false,
  confCount,
  confPurchaseType,
  confNote,
}) => {
  const [orderFormID, orderFormIDDispatch] = useContext(orderFormIDContext);
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(fromConfirm ? confCount : 1);
  const [purchaseType, setPurchaseType] = useState(
    fromConfirm ? confPurchaseType : PurchaseType.CASH
  );
  const [note, setNote] = useState(fromConfirm ? confNote : "");
  const [shipAddress, setShipAddress] = useState(!fromConfirm? 'login user address here!!!' : '');

  const typeSwitch = useRef(0);
  const order = useRef(null);

  const router = useRouter();

  const createOrder = (itemType) => {
    async function create() {
      try {
        const resp = await authApi(AUTH_TOKEN).post(
          itemType === "DISH"
            ? Endpoints.CREATE_DISH_ORDER()
            : Endpoints.CREATE_MENU_ORDER(),
          {
            itemId: item.id,
            count: count,
            purchaseType: purchaseType,
            shipAddress: shipAddress,
            note: note,
          }
        );

        if (resp.status === 201) {
          order.current = resp.data;
        } else {
          throw Error(resp.data);
        }
      } catch (ex) {
        console.error(Error(ex).message);
      }
    }

    create();
  };

  useEffect(() => {
    if (orderFormID && !Number.isNaN(orderFormID.id)) {
      async function retrieve() {
        try {
          const resp = await authApi(AUTH_TOKEN).get(
            orderFormID.itemType === "DISH"
              ? Endpoints.RETRIEVE_DISH(orderFormID.id)
              : Endpoints.RETRIEVE_MENU(orderFormID.id)
          );

          if (resp.status === 200) {
            setItem(resp.data);
          } else {
            throw Error(resp.data);
          }
        } catch (ex) {
          console.error(Error(ex).message);
        }
      }

      retrieve();
    }
  }, [orderFormID]);

  return (
    <View style={OrderFormContainer.container}>
      {item === null ? (
        <ActivityIndicator size={"large"} color={"orange"} />
      ) : (
        <>
          <View style={{ flex: 5.5 }}>
            <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
              <HomeItem
                fromOrderForm={true}
                item={item}
                index={0}
                separators={{}}
              />
              <View style={OrderFormControl.control}>
                <Text style={OrderFormControl.label}>Số lượng: </Text>
                <TextInput
                  editable={!fromConfirm}
                  value={count.toString()}
                  onChangeText={(v) => setCount(Number(v))}
                  keyboardType="numeric"
                  style={OrderFormControl.value}
                />
              </View>
              <View style={OrderFormControl.control}>
                <Text style={OrderFormControl.label}>PP thanh toán: </Text>
                <TouchableOpacity
                  disabled={fromConfirm}
                  style={OrderFormControl.value}
                  onPress={() => {
                    if (typeSwitch.current === 2) typeSwitch.current -= 3;
                    ++typeSwitch.current;
                    setPurchaseType(
                      Object.values(PurchaseType)[typeSwitch.current]
                    );
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 500,
                      textAlign: "center",
                      color: "blue",
                    }}
                  >
                    {purchaseType}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  borderColor: "brown",
                  borderWidth: 3,
                  borderRadius: 20,
                  backgroundColor: "white",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text style={OrderFormControl.label}>Địa chỉ: </Text>
                <TextInput
                  editable={!fromConfirm}
                  value={shipAddress}
                  onChangeText={(v) => setShipAddress(v)}
                  multiline={true}
                  style={{
                    width: "100%",
                    borderColor: "brown",
                    borderWidth: 3,
                    borderRadius: 20,
                    paddingLeft: 11,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  borderColor: "brown",
                  borderWidth: 3,
                  borderRadius: 20,
                  backgroundColor: "white",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text style={OrderFormControl.label}>Ghi chú: </Text>
                <TextInput
                  editable={!fromConfirm}
                  value={note}
                  onChangeText={(v) => setNote(v)}
                  multiline={true}
                  style={{
                    width: "100%",
                    borderColor: "brown",
                    borderWidth: 3,
                    borderRadius: 20,
                    paddingLeft: 11,
                  }}
                />
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 0.5,
              borderTopWidth: 1,
              borderColor: "red",
              paddingTop: "4.5%",
            }}
          >
            {!fromConfirm ? (
              <Link
                href={{
                  pathname: "/orders",
                  params: {
                    itemType: orderFormID.itemType,
                    id: item.id,
                    count: count,
                    purchaseType: purchaseType,
                    note: note,
                  },
                }}
                style={{
                  width: "100%",
                  height: "87%",
                  borderRadius: 100,
                  backgroundColor: "green",
                  paddingLeft: "36%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    NEXT
                  </Text>
                  <View style={{ width: "5%" }}></View>
                  <Icon
                    name="arrow-forward-circle-outline"
                    style={{ fontSize: 35, color: "white" }}
                  ></Icon>
                  <View style={{ width: "3%" }}></View>
                </View>
              </Link>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    createOrder(orderFormID.itemType);
                    if(order.current) {
                      router.navigate({
                        pathname: "",
                        params: {
                        },
                      })
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "87%",
                    borderRadius: 100,
                    backgroundColor: "green",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "3%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      ORDER
                    </Text>
                    <View style={{ width: "2%" }}></View>
                    <Icon
                      style={{ fontSize: 30, color: "white" }}
                      name="checkmark-done-circle-outline"
                    ></Icon>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default OrderForm;

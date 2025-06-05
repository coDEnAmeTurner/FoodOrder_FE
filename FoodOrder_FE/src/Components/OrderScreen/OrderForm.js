import { ActivityIndicator, Text, View } from "react-native";
import { OrderFormContainer } from "@/src/stylesheets/HomeScreenStyle/OrderStyle/OrderForm";
import { useContext, useEffect, useState } from "react";
import { orderFormIDContext } from "@/src/Context/OrderFormIDContext";
import HomeItem from "../HomeScreen/HomeItem";
import { authApi, AUTH_TOKEN } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";

const OrderForm = () => {
  const [orderFormID, orderFormIDDispatch] = useContext(orderFormIDContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
      
      if (orderFormID && !Number.isNaN(orderFormID.id)) {
        console.log("OrderForm: orderFormID", orderFormID);
      async function retrieve() {
        try {
          const resp = await authApi(AUTH_TOKEN).get(
            orderFormID.itemType === 'DISH'? Endpoints.RETRIEVE_DISH(orderFormID.id):
            Endpoints.RETRIEVE_MENU(orderFormID.id)
          );

          if (resp.status === 200) {
            console.log("OrderForm: resp", resp.data);
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
          <Text style={{color:'white'}}>{item.name}</Text>
        </>
      )}
    </View>
  );
};

export default OrderForm;

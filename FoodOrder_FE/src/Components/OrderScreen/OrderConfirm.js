import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useReducer } from "react";
import { authApi, AUTH_TOKEN } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import { useState } from "react";
import { OrderConfirmStyle } from "@/src/stylesheets/HomeScreenStyle/OrderStyle/OrderConfirmStyle";
import OrderForm from "./OrderForm";
import OrderFormIDReducer, {
  orderFormIDContext,
} from "@/src/Context/OrderFormIDContext";

const OrderConfirm = () => {
  const { note, purchaseType, count, id, itemType } =
    useLocalSearchParams();
    const [orderFormID, orderFormIDDispatch] = useReducer(OrderFormIDReducer, {
        id: id,
        itemType: itemType,
    });
    console.log(orderFormID);
    
  return (
    <orderFormIDContext.Provider value={[orderFormID, orderFormIDDispatch]}>
      <View style={OrderConfirmStyle.container}>
        <OrderForm
            fromConfirm={true}
            confCount={count}
            confNote={note}
            confPurchaseType={purchaseType}
        />
      </View>
    </orderFormIDContext.Provider>
  );
};

export default OrderConfirm;

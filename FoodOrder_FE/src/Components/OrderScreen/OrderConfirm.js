import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useReducer } from "react";
import { OrderConfirmStyle } from "@/src/stylesheets/HomeScreenStyle/OrderStyle/OrderConfirmStyle";
import OrderForm from "./OrderForm";
import OrderFormIDReducer, {
  orderFormIDContext,
} from "@/src/Context/OrderFormIDContext";

const OrderConfirm = () => {
  const { note, purchaseType, count, id, itemType, shipAddress } =
    useLocalSearchParams();
  const [orderFormID, orderFormIDDispatch] = useReducer(OrderFormIDReducer, {
      id: id,
      itemType: itemType,
  });
    
  return (
    <orderFormIDContext.Provider value={[orderFormID, orderFormIDDispatch]}>
      <View style={OrderConfirmStyle.container}>
        <OrderForm
            fromConfirm={true}
            confCount={count}
            confNote={note}
            confPurchaseType={purchaseType}
            confShipAddress={shipAddress}
        />
      </View>
    </orderFormIDContext.Provider>
  );
};

export default OrderConfirm;

import { View, Text } from "react-native"
import {useRetrieveOrder} from '@/src/CustomHooks/useRetrieveOrder'
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

const VNPayPayment = ()=>{
    const {orderID} = useLocalSearchParams()
    const {order, setOrder} = useRetrieveOrder()

    useEffect(()=>{
        setOrder(Number(orderID))
    }, [orderID])

    return <View><Text>vnpay</Text></View>

}

export default VNPayPayment;
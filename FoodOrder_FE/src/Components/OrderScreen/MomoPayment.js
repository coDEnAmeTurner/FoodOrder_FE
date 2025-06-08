import {View, Text} from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import {useRetrieveOrder} from '@/src/CustomHooks/useRetrieveOrder'

const MomoPayment  = ()=>{
    const {orderID} = useLocalSearchParams()
    const {order, setOrder} = useRetrieveOrder()

    useEffect(()=>{
        setOrder(orderID)
    }, [orderID])

    return <View><Text>{order.id}</Text></View>
}

export default MomoPayment;
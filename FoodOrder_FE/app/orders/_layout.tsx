import { Stack } from "expo-router"
import { HeaderStyle } from "@/src/stylesheets/Tabs/TabStyle"
import { Image } from "react-native"

export default function RootLayout () {
    return <Stack initialRouteName="index" screenOptions={{
            headerShown:false,
            gestureDirection:"horizontal",
            headerStyle:HeaderStyle.header,
            headerTitleStyle:HeaderStyle.headerTitle,
            headerTintColor:"white",
        }}>
            <Stack.Screen name='index' options={{
                headerShown: true,
                headerTitle: 'Order Confirm'
            }}/>
            <Stack.Screen name='momo_payment' options={{
                headerShown: true,
                headerTitle: 'MoMo E-Wallet',
                headerStyle:{backgroundColor:'#b0006d'},
                headerTitleStyle:{fontFamily:'San Francisco', fontSize:20, fontWeight:'bold'},
                headerRight:()=><Image style={{width:30, height:30}} source={require('../../assets/images/momo.webp')}></Image>
            }}/>
        </Stack>
}
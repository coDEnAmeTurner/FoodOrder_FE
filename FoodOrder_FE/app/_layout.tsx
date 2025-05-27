import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack initialRouteName="master" screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='master'/>
        <Stack.Screen name='priceselect'/>
        <Stack.Screen name='index'/>
    </Stack>
}
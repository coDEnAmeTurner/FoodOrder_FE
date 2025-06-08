import { HeaderStyle } from "@/src/stylesheets/Tabs/TabStyle";
import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack initialRouteName="login" screenOptions={{
        headerShown:false,
        gestureDirection:"horizontal",
        headerStyle:HeaderStyle.header,
        headerTitleStyle:HeaderStyle.headerTitle,
        headerTintColor:"white"
    }}>
        <Stack.Screen name='master'/>
        <Stack.Screen name='dishs' options={{
            headerShown: true,
            headerTitle: 'Dish'
        }}/>
        <Stack.Screen name='login' options={{
            headerShown: true,
            headerTitle: 'Login'
        }}/>
        <Stack.Screen name='register' options={{
            headerShown: true,
            headerTitle: 'Register'
        }}/>
        <Stack.Screen name='orders' options={{
            headerShown: false,
        }}/>
        <Stack.Screen name='index' />
    </Stack>
}
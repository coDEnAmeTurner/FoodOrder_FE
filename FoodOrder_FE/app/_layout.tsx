import { HeaderStyle } from "@/src/stylesheets/Tabs/TabStyle";
import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack initialRouteName="master" screenOptions={{
        headerShown:false,
        headerStyle:HeaderStyle.header,
        headerTitleStyle:HeaderStyle.headerTitle,
        headerTintColor:"white"
    }}>
        <Stack.Screen name='master'/>
        <Stack.Screen name='index'/>
    </Stack>
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import MyShopScreen from "../MyShopScreen/MyShopScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SettingScreen from "../SettingScreen/SettingScreen";
import { View } from "react-native";

const BottomTabs = createBottomTabNavigator();

const Layout = () => {
  return (
    <BottomTabs.Navigator
      layout={({ children }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: "yellow",
          }}
        >
          {children}
        </View>
      )}
    >
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="MyShop" component={MyShopScreen} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} />
      <BottomTabs.Screen name="Setting" component={SettingScreen} />
    </BottomTabs.Navigator>
  );
};

export default Layout;

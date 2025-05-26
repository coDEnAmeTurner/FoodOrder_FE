import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import FavoriteScreen from "../FavoriteScreen/FavoriteScreen";
import CartScreen from "../CartScreen/CartScreen";

const BottomTabs = createBottomTabNavigator();

const Layout = () => {
  return (
    <BottomTabs.Navigator
      
    >
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Favorite" component={FavoriteScreen} />
      <BottomTabs.Screen name="Cart" component={CartScreen} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} />
    </BottomTabs.Navigator>
  );
};

export default Layout;

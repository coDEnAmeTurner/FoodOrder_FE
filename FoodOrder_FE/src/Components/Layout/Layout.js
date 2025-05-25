import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@react-native-vector-icons/ionicons"
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import FavoriteScreen from "../FavoriteScreen/FavoriteScreen";
import CartScreen from "../CartScreen/CartScreen";

const BottomTabs = createBottomTabNavigator();

const Layout = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route})=>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return icon component
          return <Icon name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: '#ff4000',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Favorite" component={FavoriteScreen} />
      <BottomTabs.Screen name="Cart" component={CartScreen} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} />
    </BottomTabs.Navigator>
  );
};

export default Layout;

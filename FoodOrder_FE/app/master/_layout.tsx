import { Tabs } from 'expo-router';
import Icon from "@react-native-vector-icons/ionicons"
import { Text } from '@react-navigation/elements';
import {HeaderStyle} from '../../src/stylesheets/Tabs/TabStyle'

export default function RootLayout() {
  return (
    <Tabs 
      screenOptions={({route})=>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'order') {
            iconName = focused ? 'reorder-four' : 'reorder-four-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return icon component
          return <Icon name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: '#ff4000',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === 'index') {
            label = 'Home';
          } else if (route.name === 'order') {
            label = 'Order';
          } else if (route.name === 'profile') {
            label = 'Profile';
          }

          // Return icon component
          return <Text>{label}</Text>;
        },
        headerStyle:HeaderStyle.header,
        headerTintColor: "white",
        headerTitleStyle: HeaderStyle.headerTitle
      })}
      >
      <Tabs.Screen name="index" options={{
        title: 'Home'
      }} />
      <Tabs.Screen name="order" options={{
        title: 'Order'
      }}/>
      <Tabs.Screen name="profile" options={{
        title: 'Profile'
      }}/>
    </Tabs>
  );
}
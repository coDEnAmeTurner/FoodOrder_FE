import { StyleSheet, Text, View } from 'react-native';
import Layout from './Fixed/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Layout/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

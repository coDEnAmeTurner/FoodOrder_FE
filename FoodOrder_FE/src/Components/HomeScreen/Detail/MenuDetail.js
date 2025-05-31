import { Link } from "expo-router";
import { Text, View } from "react-native";

const MenuDetail = () => {
  return (
    <View>
      <Text>Show Menu Detail</Text>
      <Link href={'/master'}>Back</Link>
    </View>
  );
};

export default MenuDetail;

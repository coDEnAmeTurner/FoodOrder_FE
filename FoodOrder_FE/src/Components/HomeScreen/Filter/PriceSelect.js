import { Link } from "expo-router";
import { Text } from "react-native";

const PriceSelect = () => {
  return (
    <>
      <Text>Select Price</Text>
      <Link href={"/master"}>Press to return Home</Link>
    </>
  );
};

export default PriceSelect;

import { useLocalSearchParams } from "expo-router";
import DishDetail from "../../src/Components/HomeScreen/Detail/DishDetail/DishDetail";

export default function Detail_Wrapper() {
  const { id } = useLocalSearchParams();

  return (
    <DishDetail dishId={id}/>
  );
}
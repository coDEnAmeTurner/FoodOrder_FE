import { View, Text } from "react-native";
import CommentItem from "./CommentItem";

const CommentDetail = ({containerStyle}) => {
  return (
    <View style={containerStyle}>
      <CommentItem />
    </View>
  );
};

export default CommentDetail;

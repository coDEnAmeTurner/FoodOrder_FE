import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  requireNativeComponent,
} from "react-native";
import { CommentStyle } from "@/src/stylesheets/HomeScreenStyle/DetailStyle/CommentStyle";
import { PREFIX } from "../../HomeCommon";
import { useState } from "react";
import Popup from "../Popup";
import Icon from "@react-native-vector-icons/ionicons";

const CommentItem = ({ item, index, seperators }) => {

  return (
    <View key={index} style={CommentStyle.commentItem}>
      <View style={CommentStyle.metaData}>
        <Image
          source={
            item && item.user.avatar
              ? { uri: item.user.avatar.substring(PREFIX.length) }
              : require("@/assets/images/favicon.png")
          }
          style={CommentStyle.avatar}
        />
        <Text
          style={CommentStyle.username}
        >{`${item.user.last_name} ${item.user.first_name}`}</Text>
      </View>
      <View style={CommentStyle.comContent}>
        <ScrollView nestedScrollEnabled>
          <Text>{item.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default CommentItem;

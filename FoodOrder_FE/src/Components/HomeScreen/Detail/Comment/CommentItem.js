import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { CommentStyle } from "@/src/stylesheets/HomeScreenStyle/DetailStyle/CommentStyle";
import { PREFIX } from "../../HomeCommon";
import { useState } from "react";
import RateBar from "../RateBar";


const CommentItem = ({ item, index, seperators, showDetailState,detail=true }) => {
  const [starCount, setStarCount] = useState(0);
  const [showDetail, setShowDetail] = showDetailState;

  return (
    <View key={index} style={[CommentStyle.commentItem, detail?{}:{height:'auto'}]}>
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
        >{`${item?.user.last_name} ${item?.user.first_name}`}</Text>
      </View>
      <TouchableOpacity style={CommentStyle.comContent} onPress={()=>{setShowDetail(!showDetail)}}>
        <View style={CommentStyle}>
          <Text numberOfLines={detail?6:undefined}>{item?.content}</Text>
        </View>
      </TouchableOpacity>
      <View style={CommentStyle.comBottom}>
        {detail?<Text style={{alignSelf:'center',paddingLeft:5}}>Replies - ({item.childrenCount})</Text>:<></>}
        <RateBar
          containerStyle={CommentStyle.comRate}
          iconStyle={[CommentStyle.rateIcon, { margin: 3, fontSize: 24 }]}
          starState={[starCount, setStarCount]}
        />
      </View>
    </View>
  );
};

export default CommentItem;

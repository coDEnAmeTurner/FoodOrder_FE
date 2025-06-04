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
import { authApi, AUTH_TOKEN } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";

const CommentItem = ({ item, index, seperators, detailIDState,detail=false }) => {
  const [starCount, setStarCount] = useState(0);
  const [detailID, setDetailID] = detailIDState;
  const [children, setChildren] = useState([]);

  const retrieveChildren = (parentId)=>{
    if (children === null || children.length < 1) {
      async function doRetrieval() {
        try {
          const resp = await authApi(AUTH_TOKEN).get(Endpoints.LIST_COMMENTS_BY_COMMENT(parentId));

          if (resp.status === 200) {
            setChildren(resp.data);
          }
          else {
            throw (Error(resp.data))
          }
        }
        catch(ex) {
          console.error(Error(ex).message)
        }
      }

      doRetrieval()
    }
  }

  return (
    <>
    <View key={index} style={[CommentStyle.commentItem, detail?{height:'auto'}:{}]}>
      <View style={[CommentStyle.metaData, detail?{flex:undefined}:{}]}>
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
      <TouchableOpacity style={[CommentStyle.comContent, detail?{flex:undefined}:{}]} onPress={()=>{if(!detailID && !detail) setDetailID(item.id)}}>
        <View>
          <Text numberOfLines={!detail?6:undefined}> {detail && item.parent?<Text style={{color:'blue'}}>@{item.parent.user.last_name + ' ' + item.parent.user.first_name}</Text>:<></>} {item?.content}</Text>
        </View>
      </TouchableOpacity>
      <View style={[CommentStyle.comBottom, detail?{flex:undefined}:{}]}>
        <TouchableOpacity onPress={()=>{  if(detail) {retrieveChildren(item.id)} else setDetailID(item.id)}} style={{alignSelf:'center',paddingLeft:5}}><Text >Replies - ({item.count})</Text></TouchableOpacity>
        <RateBar
          containerStyle={CommentStyle.comRate}
          iconStyle={[CommentStyle.rateIcon, { margin: 3, fontSize: 24 }]}
          starState={[starCount, setStarCount]}
        />
      </View>
    </View>
    {children && children.length > 0?children.map((child, index)=>(
      <CommentItem key={index} index={index} detailIDState={detailIDState} item={child} detail={true}/>
    )):<></>}
    </>
  );
};

export default CommentItem;

import {
  View,
  ActivityIndicator,
  TouchableOpacity,
 ScrollView } from "react-native";
import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";
import { AUTH_TOKEN, authApi } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";


const CommentDetail = ({ containerStyle, detailIDState }) => {
  const [item, setItem] = useState(null);
  const [detailID, setDetailID] = detailIDState;

  useEffect(() => {
    async function retrieve() {
      try {
        const resp = await authApi(AUTH_TOKEN).get(
          Endpoints.RETRIEVE_COMMENT_BY_ID(detailID)
        );

        if (resp.status === 200) {
          setItem(resp.data);
        } else {
          throw Error(resp.data);
        }
      } catch (ex) {
        console.error(Error(ex).message);
      }
    }

    retrieve();
  }, [detailID]);

  return (
    <View style={containerStyle}>
      {item === null ? (
        <ActivityIndicator size={"large"} color={"orange"}></ActivityIndicator>
      ) : (
        <ScrollView nestedScrollEnabled={true}>
          <TouchableOpacity activeOpacity={1}>
            <CommentItem
              item={item}
              detail={true}
              detailIDState={detailIDState}
            />
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default CommentDetail;

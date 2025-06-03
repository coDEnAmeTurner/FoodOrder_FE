import React, { useState, useEffect , useContext } from "react";
import { FlatList, View, ActivityIndicator, Text , RefreshControl } from "react-native";
import CommentItem from './CommentItem'
import { dishElementContext } from "@/src/Context/DishElementContext";
import { commentListContext } from "@/src/Context/CommentListContext";


const CommentList = React.memo(function useCommentList ({  showDetailState, onRefreshComments }) {
  const [showDetail, setShowDetail] = showDetailState;
  const [comRefreshing, setComRefreshing] = useState(false);

  const [element, elementDispatch] = useContext(dishElementContext)
  const [comments, commentsDispatch] = useContext(commentListContext)

  useEffect(() => {
    if (comRefreshing === true) {
      async function commentsRetrieve() {
        await onRefreshComments(element.id);
        setComRefreshing(false);
      }

      commentsRetrieve();

    }
  }, [comRefreshing]);

  return (
    <FlatList
      style={{ width: "100%" }}
      data={comments}
      ListEmptyComponent={() => (
        <View>
          <ActivityIndicator style={{ marginTop: 300 }} size="50" />
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "black",
            }}
          >
            {" "}
            Loading...
          </Text>
        </View>
      )}
      renderItem={({ item, index, separators }) => {
        return <CommentItem
          item={item}
          index={index}
          separators={separators}
          showDetailState={[showDetail, setShowDetail]}
        />
      }}
      refreshControl={
        <RefreshControl
          refreshing={comRefreshing}
          onRefresh={() => {
            setComRefreshing(true);
          }}
        />
      }
    />
  );
}, );

export default CommentList;
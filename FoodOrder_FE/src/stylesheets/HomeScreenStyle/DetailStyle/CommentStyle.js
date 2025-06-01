import { StyleSheet } from "react-native";

export const CommentStyle = StyleSheet.create({
  commentItem: {
    margin: 5,
    backgroundColor: "white",
    height: 210,
    borderColor: "brown",
    borderWidth: 3,
    borderRadius: 20,
    flex: 1,
  },

  ratePopup: {
    backgroundColor:'#F5F5DC',
    borderColor:'brown',
    borderWidth:5,
    width:'60%',
    height:'6%',
    position:'absolute',
    bottom:10,
    left:'20%',
    borderRadius:30,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:15
  },

  rateIcon: {
    fontSize:35
  },

  metaData: {
    flex: 1,
    // backgroundColor: "red",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom:10
  },

  username: { paddingTop: 20, paddingLeft: 8, fontWeight: "bold" },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "gray",
  },

  comContent: {
    flex: 2,
    // backgroundColor: "blue",
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    padding:10
  },
});

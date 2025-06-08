import { StyleSheet } from "react-native";

export const CommentStyle = StyleSheet.create({
  commentItem: {
    margin: 5,
    backgroundColor: "white",
    height: 260,
    borderColor: "brown",
    borderWidth: 3,
    borderRadius: 20,
  },

  ratePopup: {
    flex:1,
    backgroundColor:'#F5F5DF',
    borderColor:'brown',
    borderWidth:5,
    borderRadius:40,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:'10%',
    marginTop:'75%',
    marginBottom:'115%'
  },

  rateIcon: {
    fontSize:35,
  },

  metaData: {
    flex: 1.5,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom:15
  },

  username: { paddingTop: 20, paddingLeft: 8, fontWeight: "bold" },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "gray",
  },

  comContent: {
    flex: 2.5,
    borderWidth:1,
    borderColor:'brown',
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    padding:10
  },

  comBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:14,
    paddingLeft:14,
    paddingTop:5,
    paddingBottom:7,
  },

  comRate: {
    flex:0.63, 
    flexDirection:"row",
    borderColor:'brown' ,
    borderWidth:3,
    borderRadius:25,
    paddingTop:1,
    backgroundColor:'#F5F5DF'
  }
});

export const CommentDetailStyle = StyleSheet.create({
  container: {
    borderColor:'brown',
    borderWidth:3,
    borderRadius:40,
    backgroundColor:'black',
    width:'105%',
    flex:1,
    padding:7,
  }
})
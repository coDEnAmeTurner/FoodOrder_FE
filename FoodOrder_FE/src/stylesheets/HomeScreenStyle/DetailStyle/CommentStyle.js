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
    backgroundColor:'#F5F5DF',
    borderColor:'brown',
    borderWidth:5,
    width:'60%',
    height:'6%',
    position:'absolute',
    bottom:490,
    left:'20%',
    borderRadius:30,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:15
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
    paddingTop:5,
    paddingBottom:7,
  },

  comRate: {
    flex:0.55, 
    flexDirection:"row",
    borderColor:'brown' ,
    borderWidth:3,
    borderRadius:25,
    paddingTop:3,
    paddingLeft:5,
    backgroundColor:'#F5F5DF'
  }
});

export const CommentDetailStyle = StyleSheet.create({
  container: {
    width:'90%',
    height:'93%',
    borderColor:'brown',
    borderWidth:3,
    borderRadius:40,
    backgroundColor:'black',
    position:'absolute',
    left:'5.3%',
    top:'3.5%'
  }
})
const { StyleSheet } = require("react-native");

const homeScreenStyles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    width: "100%",
  },
});

export const homeContentStyles = StyleSheet.create({
  homeContent: {
    flex: 17,
    backgroundColor: "#FFCD6B",
    width: "100%",
  },
});

export const displayItemStyles = StyleSheet.create({
  imgPopContent: {
    backgroundColor:'black',
    position:"absolute",
    borderColor:'brown',
    borderWidth:3.2,
    borderRadius:16,
    width:'75%',
    height:'75%',
    left:50,
    top:56
  },

  modalNameContainer: { 
    backgroundColor: "transparent", 
    height: "100%" 
  },

  modalName: {
    position:'absolute',  
    backgroundColor: 'white',
    top:100,
    right:0,
    borderColor:'brown',
    borderWidth:3.2,
    borderRadius:10,
    marginLeft:10,
    marginRight:7,
    height:50,
    justifyContent:'center',
    paddingLeft:7,
    paddingRight:7,
  },

  modalNameText: {
    fontSize:20,
    fontWeight:600,
    fontStyle:'italic',
  },

  outerDItem: {
    flexDirection: "row",
    borderWidth: 3,
    borderColor:
      "linear-gradient(110deg,rgb(148, 19, 253) 0%, rgba(8, 86, 158, 1) 33%, rgba(251, 0, 255, 1) 63%)",
    borderRadius: 20,
    backgroundColor: "white",
    margin: 5,
    // height: "auto",
    height: "140",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },

  displayItem: {
    width: "100%",
  },

  displayName: {
    fontSize: 21,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  displayDishPic: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    width: 110,
    height: 110,
    position: "absolute",
    right: 15,
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 4,
  },

  outerActionsStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  linkWrapper: {
    flex: 1,
    padding: 0,
    paddingTop: 8,
  },

  actionStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    flexDirection: "row",
    height: "70%",
    position: "absolute",
  },
  actionText: {
    fontWeight: "bold",
    color: "#FFF8DC",
    marginRight: 10,
  },
  actionIcon: {
    fontSize: 20,
    color: "#FFF8DC",
    fontWeight: "bold",
  },
});

export const ToggleButton = StyleSheet.create({
  backgroundColor: "rgb(187, 119, 226)",
  flex: 1,
  justifyContent: "center",
  borderRadius: 10,
  borderColor: "white",
  borderWidth: 4,

  typeText: {
    color: "rgb(241, 238, 7)",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "cursive",
    fontSize: 23,
  },
});

export const querySectionStyles = StyleSheet.create({
  querySection: {
    flex: 3,
    backgroundColor: "#FFCD6B",
  },
});

export const otherQueryStyles = StyleSheet.create({
  otherQuery: {
    flex: 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  otherQueryComp: {
    flex: 1,
    borderRadius: 30,
    justifyContent: "start",
    borderColor: "#ffa500",
    borderWidth: 3,
    margin: 4.5,
    backgroundColor: "white",
  },

  otherQueryText: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "fantasy",
  },

  popUpStyle: {
    position: "absolute",
    borderColor: "orange",
    borderWidth: 3,
    backgroundColor: "white",
    height: 80,
    width: 401,
    zIndex: 1,
    borderRadius: 10,
    marginLeft: 5,
  },

  priceFilter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 7,
  },

  priceValView: {
    flex: 5,
    padding: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 7,
  },

  daySessionItem: {
    flex: 1,
    borderWidth: 2,
    justifyContent: "center",
  },
});

export const searchBarStyles = StyleSheet.create({
  searchBar: {
    flex: 1.1,
    backgroundColor: "#FFCD6B",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchInputView: {
    margin: 8,
    flex: 7,
    borderWidth: 2,
    borderColor: "#ffa500",
    borderRadius: 7,
  },
  toggleDTypeView: {
    flex: 3,
    margin: 7,
    marginLeft: 2,
  },
  searchInput: {
    width: 294,
    height: 47,
  },
  searchFocus: {
    backgroundColor: "white",
  },
  searchNonFocus: {
    backgroundColor: "#FFCD6B",
  },
  searchAdornment: {
    position: "absolute",
    fontSize: 30,
    right: 0,
    top: 5,
  },
});

export default homeScreenStyles;

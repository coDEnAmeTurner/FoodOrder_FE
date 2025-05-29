
const { StyleSheet } = require("react-native");

const homeScreenStyles = StyleSheet.create({
    homeScreen: {
        flex: 1,
    },
    
})

export const homeContentStyles = StyleSheet.create({
    homeContent: {
        flex: 17,
        backgroundColor: "#FFCD6B"

    },
})

export const displayItemStyles = StyleSheet.create({
    displayItem: {
        backgroundColor: "white",
        height: 100,
        borderWidth: 3,
        borderColor: "linear-gradient(110deg,rgb(148, 19, 253) 0%, rgba(8, 86, 158, 1) 33%, rgba(251, 0, 255, 1) 63%)",
        borderRadius: 20,
        paddingLeft:15,
        margin:5,
        
    },

    displayName: {
        fontSize:25,
        fontWeight:"bold",
        fontStyle:"italic",
    },

    displayDishPic: {
        flex:1, 
        justifyContent:"center"
    },

})

export const ToggleButton = StyleSheet.create({
    backgroundColor:"rgb(187, 119, 226)", 
    flex:1,
    justifyContent:"center",
    borderRadius: 10,
    borderColor:"white",
    borderWidth:4,

    typeText:{
        color:"rgb(241, 238, 7)", 
        textAlign:"center",
        fontWeight:"bold",
        fontFamily:"cursive",
        fontSize:23,
    }
})

export const querySectionStyles = StyleSheet.create({
    querySection: {
        flex: 3,
        backgroundColor: "#FFCD6B"
    },
})

export const otherQueryStyles = StyleSheet.create({
    otherQuery: {
        flex: 0.9,
        flexDirection:"row",
        justifyContent:"space-between"
    },

    otherQueryComp: {
        flex: 1,
        borderRadius: 30,
        justifyContent:"start",
        borderColor:"#ffa500",
        borderWidth: 3,
        margin: 4.5,
        backgroundColor:"white",
    },

    otherQueryText: {
        textAlign:"center",
        fontWeight: "bold",
        fontFamily:"fantasy"
    },

    popUpStyle: {
        position: "absolute",
        borderColor:"orange",
        borderWidth:3,
        backgroundColor:"white",
        height:80,
        width:401,
        top:45,
        zIndex: 1,
        borderRadius: 10,
        marginLeft:5,
    },

    priceFilter: {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        padding:7
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
        flex:1,
        borderWidth:2,
        justifyContent:"center"
    }
})

export const searchBarStyles = StyleSheet.create({
    searchBar: {
        flex: 1.1,
        backgroundColor: "#FFCD6B",
        justifyContent: "center",
        flexDirection: "row",
    },
    searchInputView: {
        margin:8,
        flex: 7,
        borderWidth:2,
        borderColor:"#ffa500",
        borderRadius: 7,
    },
    toggleDTypeView: {
        flex: 3,
        margin:7,
        marginLeft: 2
    },
    searchInput: {
        width: 294,
        height:47
    },
    searchFocus: {
        backgroundColor:"white"
    },
    searchNonFocus: {
        backgroundColor: "#FFCD6B"
    },
    searchAdornment: {
        position: "absolute",
        fontSize: 30,
        right:0,
        top: 5
    },
})

export default homeScreenStyles;
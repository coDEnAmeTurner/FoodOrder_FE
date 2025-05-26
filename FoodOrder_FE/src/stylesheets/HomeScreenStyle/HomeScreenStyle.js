const { StyleSheet } = require("react-native");

const homeScreenStyle = StyleSheet.create({
    homeScreen: {
        flex: 1,
        backgroundColor: "#68b5fd"
    },

    searchBar: {
        flex: 1,
        backgroundColor: "#FFCD6B",
        justifyContent: "center",
        flexDirection: "row"
    },
    searchInputView: {
        marginLeft:5,
        flex: 7,
        borderWidth:2,
        borderColor:"#ffa500",
        borderRadius: 7,
    },
    searchInputSide: {
        flex: 2
    },
    searchInput: {
        width: 294,
        height:60
    },
    searchFocus: {
        backgroundColor:"white"
    },
    searchNonFocus: {
        backgroundColor: "#FFCD6B"
    },
    searchAdornment: {
        position: "absolute",
        fontSize: 40,
        right:0,
        top: 8
    },
    
    homeContent: {
        flex: 9,
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

export default homeScreenStyle;
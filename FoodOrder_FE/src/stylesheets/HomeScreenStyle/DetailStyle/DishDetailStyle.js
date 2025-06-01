import { StyleSheet } from "react-native";

export const DishDetailStyle = StyleSheet.create({
    dishDetail: {
        flex: 1,
        backgroundColor: "#FFCD6B",
    },

    dishOverview: {
        flex: 0.9,
        flexDirection:'row',
        margin:6,
        justifyContent:'center',
    },

    dishPicture: {
        flex: 1.3,
    },
    
    imageComp: {
        borderColor:'red',
        width:'95%',
        height:'95%',
        borderRadius:20,
        margin: 3,
        borderWidth:4
    },

    imageLargeComp: {
        width:'100%',
        height:'100%',
        borderRadius:13,
    },

    dishDescr: {
        flex: 1.7,
        borderColor:'brown',
        borderWidth:2,
        borderRadius:9
    },
    dishContent: {
        flex: 3.1,
        backgroundColor:'yellow'
    },

    
})
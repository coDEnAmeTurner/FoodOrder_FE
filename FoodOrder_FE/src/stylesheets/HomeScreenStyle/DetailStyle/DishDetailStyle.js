import { StyleSheet } from "react-native";

export const DishDetailStyle = StyleSheet.create({
    actionButton: {
        flex:1,
        marginLeft:4,
        marginRight:4,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    dishDetail: {
        flex: 1,
        backgroundColor: "#FFCD6B",
    },

    dishOverview: {
        flex: 1.2,
        flexDirection:'row',
        margin:6,
        justifyContent:'center',
    },

    dishPicture: {
        flex: 1.7,
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
        flex: 2,
        borderColor:'brown',
        borderWidth:2,
        borderRadius:9
    },
    dishContent: {
        flex: 3.5,
        padding:8
    },

    detailActions: {
        flex: 0.2,
        flexDirection:'row',
        justifyContent:"space-around",
        paddingLeft:5,
        paddingRight:5
    }
})
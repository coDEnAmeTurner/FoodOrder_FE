import { withReanimatedTimer } from "react-native-reanimated"

export const OrderFormContainer = {
    container: {
        flex:1,
        position:'absolute',
        left:'5%',
        top:'3.5%',
        borderColor:'brown',
        backgroundColor:'black',
        borderWidth:5,
        borderRadius:20,
        width:'90%',
        height:'90%',
        padding:5,
    }
}

export const OrderFormControl = {
    control: {
        margin:3,
        height: 140,
        borderColor:"brown",
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        padding:15,
        justifyContent: "space-around",
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
    value: {
        width:'60%',
        borderColor:'brown',
        borderWidth: 3,
        borderRadius: 20,
        paddingLeft:11,
    }
}
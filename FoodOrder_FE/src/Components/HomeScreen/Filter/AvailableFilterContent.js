import {Text, TouchableOpacity, View} from 'react-native'

const AvailableFilterContent = ({avaiState})=>{
    const [available, setAvailable] = avaiState

    return <View>
        <Text style={{textAlign:"center", fontStyle:"italic"}}>Dishes or Menus to query are: </Text>
        <TouchableOpacity style={{
            padding:10,
            backgroundColor:available?"#00FF00":'red',
            width:200,
            alignSelf:"center",

        }}
            onPressIn={()=>setAvailable(!available)}
        >
            <Text style={{textAlign:"center",fontWeight:"bold"}}>{available?'AVAILABLE':'UNAVAILABLE'}</Text>
        </TouchableOpacity>
    </View>
}

export default AvailableFilterContent;
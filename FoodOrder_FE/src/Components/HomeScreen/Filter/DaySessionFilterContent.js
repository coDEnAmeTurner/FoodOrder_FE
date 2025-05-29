import { otherQueryStyles } from '@/src/stylesheets/HomeScreenStyle/HomeScreenStyle';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import { DaySession } from '../HomeCommon';

const DaySessionFilterContent = ({daySessionState})=>{
    const [daySession, setDaySession] = daySessionState

    return <View style={{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly"
    }}>
        <ImageBackground style={[otherQueryStyles.daySessionItem, {borderColor:"yellow", }]} source={require('../../../../assets/images/morning.jpg')}>
            <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPressIn={()=>setDaySession(DaySession.MORNING)}>
                <Text style={{textAlign:'center',fontWeight:"bold",fontFamily:'fantasy'
                }}>{DaySession.MORNING}</Text>
            </TouchableOpacity>
        </ImageBackground>
        <ImageBackground style={[otherQueryStyles.daySessionItem, {borderColor:"#000099", }]} source={require('../../../../assets/images/afternoon.jpg')}>
            <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPressIn={()=>setDaySession(DaySession.AFTERNOON)}>
                <Text style={{textAlign:'center',fontWeight:"bold",fontFamily:'fantasy',color:"#4c5fbf"
                }}>{DaySession.AFTERNOON}</Text>
            </TouchableOpacity>
        </ImageBackground>
        <ImageBackground style={[otherQueryStyles.daySessionItem, {borderColor:"white", }]}>
            <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPressIn={()=>setDaySession(DaySession.NONE)}>
                <Text style={{textAlign:'center',fontWeight:"bold",fontFamily:'fantasy'
                }}>NONE</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
}

export default DaySessionFilterContent;
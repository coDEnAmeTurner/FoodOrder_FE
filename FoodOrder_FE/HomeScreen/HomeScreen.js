import { useRef } from "react";
import { View,Text, ScrollView, SectionList, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useSmileyFace } from "./useSmileyFace";

// Home Screen will display:
// - If personal user: Order, On-Trend Food, Shop that is placed high in ranks
// - If shop user: Edit Food, Order, Menu, ...

const HomeScreen = () => {
  const firstNameProps = useSmileyFace("")
  const lastNameProps = useSmileyFace("")
  const sectionsRef = useRef(null);

  const scrollToSection = (index)=>{
    sectionsRef.current?.scrollToLocation({
      sectionIndex: index,
      itemIndex: 0,
      animated: true,
    });
  }

  return (
    <View style={{
        flex: 1
    }}>
      <View style={{flex:5, backgroundColor:"blue", justifyContent:"space-around", flexDirection:"column", overflow:"visible"}}>
        <View>
          <TextInput placeholder="First Name: " style={{borderWidth:2, borderColor:"white", backgroundColor:"#8EC7D2"}} value={firstNameProps.value} onChangeText={(val)=>{firstNameProps.onChange(val)}}/>
          <TextInput placeholder="Last Name: " style={{borderWidth:2, borderColor:"white", backgroundColor:"#8EC7D2"}} value={lastNameProps.value} onChangeText={(val)=>{lastNameProps.onChange(val)}}/>
        </View>
        <View>
          <Text style={{borderWidth:2, borderColor:"white", backgroundColor:"#8EC7D2"}}>Hello, {firstNameProps.value} {lastNameProps.value}</Text>
        </View>
      </View>
      <View style={{flex:12, flexDirection: "row", backgroundColor:"yellow", overflow: "visible"}}>
        
      </View>
    </View>
  );
};

export default HomeScreen;

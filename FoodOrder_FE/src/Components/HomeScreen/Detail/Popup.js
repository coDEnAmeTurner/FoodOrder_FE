import {  Modal, Animated, PanResponder, View, Text } from "react-native";
import { useEffect, useRef } from "react";
import Icon from "@react-native-vector-icons/ionicons";

const Popup = ({
  animationType,
  visibleState,
  children,
  isSpotLight = false,
}) => {
  const [modalVisible, setModalVisible] = visibleState || [null, null];
  const pan = useRef(new Animated.Value(0));

  useEffect(() => {
    if (modalVisible) {
      pan.current.setValue(0); // Reset the position when modal becomes visible
    }
  },[modalVisible])

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => {if(e.nativeEvent.locationY >= 788) return true; return false},
      onMoveShouldSetPanResponder: (e,gesture) => {if(e.nativeEvent.locationY >= 788) return true; return false},
      onPanResponderMove: Animated.event([null, {dy: pan.current}], {useNativeDriver:false}),
      onPanResponderRelease: (event, gestureState) => {
        if (Math.abs(gestureState.vy) > 3) {
          Animated.timing(pan.current, {
            toValue: gestureState.dy > 0 ? 1000 : -1000,
            duration: 240,
            useNativeDriver: false,
          }).start(()=>{
            setModalVisible(typeof modalVisible === "number" ? NaN : false);
          });
          
        }
        else {
          pan.current.setValue(0); // Reset the position if the gesture is not strong enough
        }
      },
      // onMoveShouldSetPanResponderCapture: () => true,
      // onStartShouldSetPanResponderCapture: () => true,
      // onShouldBlockNativeResponder: () => true,

    }),
  ).current;

  return (
    <Modal
      animationType={animationType}
      visible={Boolean(modalVisible)}
      style={{
        flex: 1,
        width: 100,
        height: 100,
        position: "absolute",
      }}
      backdropColor={
        isSpotLight ? "hsla(88, 16.50%, 33.30%, 0.7)" : "transparent"
      }
      transparent={isSpotLight ? false : true}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={[{ flex: 1 }, {transform:[{translateY: pan.current}]}]}
      >
          <View style={{flex:15, alignItems:'center', justifyContent:'center', padding:27}}>
            {children}
          </View>
          <View pointerEvents="none" style={{flex:1, flexDirection:'row', justifyContent:'center',borderColor:'red',borderTopWidth:1}}>
            <Text  style={{fontSize:20, fontWeight:'bold', color:'white', }}>Swipe</Text>
            <View  style={{width:'2%'}}></View>
            <Icon  name="chevron-up-circle-outline" style={{fontSize:25, color:'white'}}></Icon>
          </View>
      </Animated.View>
    </Modal>
  );
};

export default Popup;

import { View, Modal, Pressable } from "react-native";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";

const Popup = ({
  animationType,
  visibleState,
  children,
  isSpotLight=false
}) => {
  const [modalVisible, setModalVisible] = visibleState;

  return (
    <Modal
      
      animationType={animationType}
      visible={Boolean(modalVisible)}
      style={{
        width: 100,
        height: 100,
        position: "absolute",
      }}
      backdropColor={isSpotLight?'hsla(88, 16.50%, 33.30%, 0.7)':"transparent"}
      transparent={isSpotLight?false:true}
    >
      <Pressable
        onPress={(e) => {
          setModalVisible(typeof modalVisible === 'number'?NaN: false);
        }}
      >
        <View style={displayItemStyles.modalNameContainer}>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

export default Popup;

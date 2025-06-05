import { View, Modal, Pressable, TouchableOpacity, Text } from "react-native";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";

const Popup = ({
  animationType,
  visibleState,
  children,
  isSpotLight = false,
}) => {
  const [modalVisible, setModalVisible] = visibleState || [null, null];

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
      <Pressable
        style={{ flex: 1 }}
        onPress={(e) => {
          setModalVisible(typeof modalVisible === "number" ? NaN : false);
        }}
      >
        
        <View style={displayItemStyles.modalNameContainer}>{children}</View>
      </Pressable>
    </Modal>
  );
};

export default Popup;

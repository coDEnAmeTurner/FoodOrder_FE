import { View, Modal, Pressable, TouchableOpacity, Text } from "react-native";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
      <GestureHandlerRootView >
        <Swipeable
          style={{ flex: 1 }}
          onSwipeableClose={(e) => {
            setModalVisible(typeof modalVisible === "number" ? NaN : false);
          }}
        >
          <View style={displayItemStyles.modalNameContainer}>{children}</View>
        </Swipeable>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default Popup;

import {
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { displayItemStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";
import { useState } from "react";
import NameText from "./NameText";
import Popup from "./Popup";
import { ScrollView } from "react-native";

const Overview = ({
  shop,
  item,
  pressGuide,
  nameSize = 21,
  descrSize = 16,
  allowPopup = false,
  descContentStyle = {},
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return item ? (
    <ScrollView>
      <View>
        {allowPopup ? (
          <>
            <Popup
              animationType={"fade"}
              visibleState={[modalVisible, setModalVisible]}
            >
              <View style={displayItemStyles.modalName}>
                <Text style={displayItemStyles.modalNameText}>{item.name}</Text>
              </View>
            </Popup>

            <NameText
              onPress={(e) => {
                setModalVisible(!modalVisible);
              }}
              numberOfLines={1}
              name={item.name}
              style={[displayItemStyles.displayName, { fontSize: nameSize }]}
            />
          </>
        ) : (
          <View>
            <NameText
              numberOfLines={1}
              name={item.name}
              style={[displayItemStyles.displayName, { fontSize: nameSize }]}
            />
            <Text numberOfLines={1} style={{fontStyle:'italic',textDecorationLine:'underline', textDecorationColor:'blue'}}>{item.shop.user.username}</Text>
          </View>
        )}
      </View>
      {pressGuide ? (
        <Text style={{ fontStyle: "italic" }}>Press for more detail</Text>
      ) : (
        <></>
      )}
      {shop ? (
        <Text
          style={[
            { fontSize: descrSize },
            { fontWeight: "bold", color: "blue" },
          ]}
        >
          {shop.location}
        </Text>
      ) : (
        <></>
      )}
      <View style={descContentStyle}>
        <Text style={{ fontSize: descrSize }}>{"\u2022"} Khoảng cách</Text>
        <Text style={{ fontSize: descrSize }}>{"\u2022"} Đánh giá</Text>
        <Text style={{ fontSize: descrSize }}>
          {"\u2022"} {item.price} VND
        </Text>
      </View>
    </ScrollView>
  ) : (
    <ActivityIndicator size={"large"} />
  );
};

export default Overview;

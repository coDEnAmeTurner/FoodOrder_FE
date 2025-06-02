import { TouchableOpacity, View } from "react-native";
import Icon from "@react-native-vector-icons/ionicons";

const RateBar = ({ containerStyle, iconStyle, starState }) => {
  const [starCount, setStarCount] = starState;

  return (
    <View style={containerStyle}>
      {Array.from({ length: 5 }, (_,i)=>i+1).map((it) => {
        return <TouchableOpacity key={it}
          style={{ flex: 1 }}
          onPressIn={() => {
            setStarCount(starCount === it ? 0 : it);
          }}
        >
          <Icon
            name={`star${starCount === 0 ? "-outline" : ""}`}
            style={[iconStyle,{color:starCount >= it?'yellow':'black'}]}
          ></Icon>
        </TouchableOpacity>
        }
      )}
    </View>
  );
};

export default RateBar;

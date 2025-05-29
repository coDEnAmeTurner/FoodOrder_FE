import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import { otherQueryStyles } from "@/src/stylesheets/HomeScreenStyle/HomeScreenStyle";

const isPositiveNumber = (input) => {
  const num = Number(input);
  return !isNaN(num) && num > 0;
};

const PriceFilterContent = ({ priceState }) => {
  const [fromPrice, setFromPrice, toPrice, setToPrice] = priceState;

  return (
    <View style={otherQueryStyles.priceFilter}>
      <View style={otherQueryStyles.priceValView}>
        <TextInput
          style={{ width: 140 }}
          keyboardType="numeric"
          value={`${fromPrice}`}
          onChangeText={(str) => {
            setFromPrice(isPositiveNumber(str) ? str : '');
          }}
        />
        <Text style={{ position: "absolute", right: 0, top: 18 }}>VND</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "fantasy",
          }}
        >
          to
        </Text>
      </View>
      <View style={otherQueryStyles.priceValView}>
        <TextInput
          style={{ width: 140 }}
          keyboardType="numeric"
          value={`${toPrice}`}
          onChangeText={(str) => {
            setToPrice(isPositiveNumber(str) ? str : '');
          }}
        />
        <Text style={{ position: "absolute", right: 0, top: 18 }}>VND</Text>
      </View>
    </View>
  );
};

export default PriceFilterContent;

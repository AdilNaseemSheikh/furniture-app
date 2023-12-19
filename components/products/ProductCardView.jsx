import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View>
        <View>
          <Image
            style={{ height: 500 }}
            source={{
              uri: `${item.item.image}`,
            }}
          />
        </View>
        <View>
          <Text numberOfLines={1}> {item.item["title"]}</Text>
          <Text> {item.item["price"]}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

import { View, Text } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcometxt(COLORS.black, SIZES.xSmall)}>
          Find the most
        </Text>
        <Text style={styles.welcometxt(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

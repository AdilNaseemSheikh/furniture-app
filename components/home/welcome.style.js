import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcometxt: (color, top) => ({
    fontSize: SIZES.xLarge,
    marginTop: top,
    color: color,
    marginHorizontal: 12,
  }),
});

export default styles;

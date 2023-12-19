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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: SIZES.medium,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
  },
  searchInput: {
    height: "100%",
    width: "100%",
    paddingHorizontal: SIZES.small,
  },
});

export default styles;

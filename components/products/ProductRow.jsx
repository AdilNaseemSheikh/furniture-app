import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import ProductCardView from "./ProductCardView";
import { COLORS, SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={(item) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          // ItemSeparatorComponent={} component to separate the items
          // numColumns={} number of columns
        />
      )}
    </View>
  );
};

export default ProductRow;

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ProductDetail = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  

  return (
    <SafeAreaView style={{ marginTop: 100 }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text> Back </Text>
        </TouchableOpacity>
      </View>
      <Image
      style={{height:350,marginBottom:20}}
        source={{
          uri: item.item.image,
        }}
      />
      <View>
        <Text>{item.item.title}</Text>
        <Text>{item.item.price}</Text>
        <View style={{display:"flex",flexDirection:'row'}}>
          {[1, 2, 3, 4, 5].map((el, i) => (
            <Text key={i}>⭐️</Text>
          ))}
          <Text>({item.item.rating.rate})</Text>
        </View>
      </View>
      <Text>
        {item.item.description}
      </Text>
    </SafeAreaView>
  );
};

export default ProductDetail;

import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Welcome from "../components/home/Welcome";
import { SIZES } from "../constants";
import ProductRow from "../components/products/ProductRow";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Shanghai, China</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
      </ScrollView>
      <ProductRow />
    </SafeAreaView>
  );
};

export default Home;

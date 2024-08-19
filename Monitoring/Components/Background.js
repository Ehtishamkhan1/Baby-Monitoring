import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Background() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="baby-face-outline"
          size={180}
          color="black"
          style={styles.headerTxt}
        />
      </View>
    </SafeAreaView>
  );
}

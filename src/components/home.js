import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center"
  }
})
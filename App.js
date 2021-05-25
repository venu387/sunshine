import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text>Sunshine App!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const image = { uri: "../assets/bg.jpg" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8D0DA",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

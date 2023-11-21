import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Custom Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#02B875",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomHeader;

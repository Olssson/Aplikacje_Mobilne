import { View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SQLite from "react-native-sqlite-storage";
import CustomHeader from "./header";
import Upload from "./upload";

export default function App() {
  return (
    <View>
      <CustomHeader />
      <Upload />
    </View>
  );
}

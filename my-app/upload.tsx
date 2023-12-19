import React, { useState, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import SQLite from "react-native-sqlite-storage";

const Upload = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {}, []);

  const createTable = () => {
    const db = SQLite.openDatabase(
      { name: "PhotosDatabase.db", location: "default" },
      () => console.log("Database opened successfully"),
      (error) => console.error("Error opening database", error)
    );

    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS photos (id INTEGER PRIMARY KEY AUTOINCREMENT, uri TEXT)",
        [],
        () => console.log("Table created successfully"),
        (tx, error) => console.error("Error creating table", error)
      );
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      // saveImageToDatabase(uri);
      setImage(uri);
    }
  };

  const saveImageToDatabase = (uri) => {
    const db = SQLite.openDatabase(
      { name: "PhotosDatabase.db", location: "default" },
      () => console.log("Database opened successfully"),
      (error) => console.error("Error opening database", error)
    );

    db.transaction(
      (tx) => {
        tx.executeSql("INSERT INTO photos (uri) VALUES (?)", [uri]);
      },
      null,
      () => console.log("Image saved to database successfully"),
      (tx, error) => console.error("Error saving image to database", error)
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={() => pickImage()}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableHighlight>
      {image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#57AD68",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Upload;

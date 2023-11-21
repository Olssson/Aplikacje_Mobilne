import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Upload = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(0, result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // console.log(result.assets[0].uri);
    }
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

import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Camera } from "expo-camera";
import { ImageContext } from "../../contexts/imageContext";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { setImage } = useContext(ImageContext);
  const cameraRef = useRef();

  const getPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const snap = async () => {
    if (cameraRef) {
      const image = await cameraRef.current.takePictureAsync();
      setImage(image.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      ref={(camera) => (cameraRef.current = camera)}
      style={styles.container}
      type={type}
    >
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => flipCamera()}>
          <Ionicons name="camera-reverse" size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => snap()}>
          <Ionicons name="ellipse-outline" size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={32} />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    height: 125,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
  },
});

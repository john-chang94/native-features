import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { ImageContext } from "../../contexts/imageContext";

export default function CameraHomeScreen({ navigation }) {
  const { image } = useContext(ImageContext);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {image ? (
          <Avatar.Image
            size={130}
            source={{ uri: image }}
            backgroundColor="#2182BD"
          />
        ) : (
          <Avatar.Icon size={130} icon="human" backgroundColor="#2182BD" />
        )}
        <Button
          icon="camera"
          mode="contained"
          color="lightblue"
          style={styles.button}
          onPress={() => navigation.navigate("CameraScreen")}
        >
          Take Picture
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    marginTop: 25,
  },
});

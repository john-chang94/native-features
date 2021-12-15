import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraHomeScreen from "../features/camera/cameraHomeScreen";
import Header from "../components/header";
import CameraScreen from "../features/camera/cameraScreen";

const Stack = createNativeStackNavigator();

export default function CameraStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CameraHomeScreen"
        component={CameraHomeScreen}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
      />
    </Stack.Navigator>
  );
}

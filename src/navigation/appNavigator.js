import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../components/home";
import NotificationsStack from "./notificationStack";
import CameraStack from "./cameraStack";
import { ImageContextProvider } from "../contexts/imageContext";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <ImageContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          // screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Notifications" component={NotificationsStack} />
          <Drawer.Screen name="Camera" component={CameraStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ImageContextProvider>
  );
}

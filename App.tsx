import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import RootStack from "./navigators/RootStack";

//Custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RootStack />;
}

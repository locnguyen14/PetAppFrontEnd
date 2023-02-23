import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import RootStack from "./navigators/RootStack";
import { Router } from "./navigators/Router";
import { AuthProvider } from "./context/Auth";

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

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

import React, { FunctionComponent } from "react";

// React navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";

//Components
import { colors } from "../components/colors";

// Define the type of the components
export type AppStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.graylight,
          borderBottomWidth: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          elevation: 0,
          height: 120,
        },
        headerTintColor: colors.black,
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

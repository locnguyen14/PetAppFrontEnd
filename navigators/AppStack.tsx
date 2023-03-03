import React, { FunctionComponent } from "react";

// React navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";

//Components
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Register from "../screens/Register";

// Define the type of the components
export type AppStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  Register: undefined;
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
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: (props) => (
            <Greeting mainText="Welcome" subText="User Login" {...props} />
          ),
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: (props) => (
            <Greeting
              mainText="Welcome"
              subText="User Registration"
              {...props}
            />
          ),
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

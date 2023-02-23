import React, { FunctionComponent } from "react";

// React navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/Home";

//Components
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";

// Define the type of the components
export type AuthStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: FunctionComponent = () => {
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
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => (
            <Greeting
              mainText="Hey Loc"
              subText="Welcome to Pet App"
              {...props}
            />
          ),
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

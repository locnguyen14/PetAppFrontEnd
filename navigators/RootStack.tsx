import React, { FunctionComponent } from "react";

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import PetDetails from "../screens/PetDetails";

//Custom components
import Greeting from "../components/Header/Greeting";
import { colors } from "../components/colors";
import { Ionicons } from "@expo/vector-icons";

// types
import { PetProps } from "../components/PetList/types";

// Define the type of the components
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  PetDetails: PetProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="PetDetails"
          component={PetDetails}
          options={({ route }) => ({
            headerTitle: "Pet Profile",
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={15}
                color={colors.black}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

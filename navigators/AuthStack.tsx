import React, { FunctionComponent } from "react";

// React navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/Home";
import AddPet from "../screens/AddPet";
import EditPet from "../screens/EditPet";

//Components
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import PetDetails from "../screens/PetDetails";
import { Ionicons } from "@expo/vector-icons";

// Types
import { EditPetFormProps } from "../components/PetForm/types";
import { PetDetailProps } from "../components/PetDetail/types";

// Define the type of the components
export type AuthStackParamList = {
  Home: undefined;
  PetDetails: PetDetailProps;
  AddPet: undefined;
  EditPet: EditPetFormProps;
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
      initialRouteName="AddPet"
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
      <Stack.Screen
        name="AddPet"
        component={AddPet}
        options={{
          headerTitle: (props) => (
            <Greeting mainText="Welcome" subText="Add a pet" {...props} />
          ),
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="EditPet"
        component={EditPet}
        options={{
          headerTitle: (props) => (
            <Greeting mainText="Welcome" subText="Edit a pet" {...props} />
          ),
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

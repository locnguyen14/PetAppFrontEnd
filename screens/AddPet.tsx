import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { styled as windStyled } from "nativewind";
// custom components
import AddPetForm from "../components/PetForm/AddPetForm";

const AddPetContainer = windStyled(View);

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
export type Props = StackScreenProps<AuthStackParamList, "AddPet">;

const AddPet: FunctionComponent<Props> = () => {
  return (
    <AddPetContainer className=" bg-gray-200">
      <StatusBar style="dark" />
      <AddPetForm />
    </AddPetContainer>
  );
};

export default AddPet;

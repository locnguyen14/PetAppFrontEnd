import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { styled as windstyled } from "nativewind";

const EditPetContainer = windstyled(View);

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import EditPetForm from "../components/PetForm/EditPetForm";
import { View } from "react-native";
export type Props = StackScreenProps<AuthStackParamList, "EditPet">;

const EditPet: FunctionComponent<Props> = ({ route }) => {
  return (
    <EditPetContainer className=" bg-gray-200">
      <StatusBar style="dark" />
      <EditPetForm {...route?.params} />
    </EditPetContainer>
  );
};

export default EditPet;

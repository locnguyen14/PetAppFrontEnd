import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import PetForm from "../components/PetForm/PetForm";

const AddPetContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 2;
`;

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "AddPet">;

const AddPet: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <AddPetContainer>
      <StatusBar style="dark" />
      <PetForm />
    </AddPetContainer>
  );
};

export default AddPet;

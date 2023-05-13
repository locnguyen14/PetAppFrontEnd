import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";

const AddPetContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 2;
`;

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import EditPetForm from "../components/PetForm/EditPetForm";
export type Props = StackScreenProps<AuthStackParamList, "EditPet">;

const EditPet: FunctionComponent<Props> = ({ route }) => {
  return (
    <AddPetContainer>
      <StatusBar style="dark" />
      <EditPetForm {...route?.params} />
    </AddPetContainer>
  );
};

export default EditPet;

import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/Buttons/RegularButton";
import PetDetailSection from "../components/PetDetail/PetDetailSection";

import PetService from "../services/PetService";

const PetDetailContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 2;
`;

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import { EditPetFormProps } from "components/PetForm/types";
type Props = StackScreenProps<AuthStackParamList, "PetDetails">;

const PetDetails: FunctionComponent<Props> = ({ route, navigation }) => {
  const petId = route.params.id.toString();
  const HandleDelete = () => {
    PetService.remove(petId)
      .then((response) => {
        console.log("Successfully Delete Animal", response);
        navigation.navigate("Home");
      })
      .catch((error) => console.log("Error during delete: ", error));
  };

  const ToEditPage = () => {
    console.log("Inside To Edit Page?");
    navigation.navigate("EditPet", { ...route.params });
  };

  return (
    <PetDetailContainer>
      <StatusBar style="dark" />
      <PetDetailSection {...route?.params} />
      <RegularButton onPress={() => HandleDelete()}>Delete</RegularButton>
      <RegularButton onPress={() => ToEditPage()}>Edit</RegularButton>
    </PetDetailContainer>
  );
};

export default PetDetails;

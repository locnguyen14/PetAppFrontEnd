import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import PetDetailSection from "../components/PetDetail/PetDetailSection";

const PetDetailContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 2;
`;

// Need the data from the screen components --> rootstack
// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "PetDetails">;

const PetDetails: FunctionComponent<Props> = ({ route }) => {
  return (
    <PetDetailContainer>
      <StatusBar style="dark" />
      <PetDetailSection {...route?.params} />
    </PetDetailContainer>
  );
};

export default PetDetails;

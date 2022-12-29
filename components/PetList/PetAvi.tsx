import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Image } from "react-native";

import { PetAviProps } from "./types";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const PetAvi: FunctionComponent<PetAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <MaterialCommunityIcons
        name={props.icon}
        color={colors.white}
        size={40}
      />
    </StyledView>
  );
};

export default PetAvi;

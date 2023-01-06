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

const AvatarImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const randomImageSouce = require("./../../assets/cat/Bullet.jpg");

const PetAvi: FunctionComponent<PetAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <AvatarImage source={randomImageSouce} />
    </StyledView>
  );
};

export default PetAvi;

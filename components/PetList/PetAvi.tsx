import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

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

const PetAvi: FunctionComponent<PetAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <AvatarImage source={{ uri: props.icon }} />
    </StyledView>
  );
};

export default PetAvi;

import React, { FunctionComponent } from "react";
import { styled } from "nativewind";

import { PetAviProps } from "./types";
import { View, Image } from "react-native";

const StyledView = styled(
  View,
  " h-11 w-11 rounded-lg items-center justify-center "
);

const AvatarImage = styled(Image);

const PetAvi: FunctionComponent<PetAviProps> = (props) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <AvatarImage
        className=" h-10 w-10 rounded-lg justify-center items-center "
        source={{ uri: props.icon }}
      />
    </StyledView>
  );
};

export default PetAvi;

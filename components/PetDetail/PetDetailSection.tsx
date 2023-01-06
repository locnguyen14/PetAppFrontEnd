import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

//Custom Components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import BigText from "../Texts/BigText";

import { ScreenWidth } from "./../shared";

const PetDetailImage = styled.Image`
  height: 40%;
  width: ${ScreenWidth * 0.9}px;
  resize-mode: cover;
  background-color: ${colors.primary};
  border-radius: 25px;
`;

const PetDetailSectionBackground = styled.View`
  width: 100%
  padding-top: 5px;
  align-items: center;
  flex: 3;
`;

//types
import { PetDetailProps } from "./types";

const randomImageSouce = require("./../../assets/cat/Bullet.jpg");

const PetDetailSection: FunctionComponent<PetDetailProps> = (props) => {
  return (
    <PetDetailSectionBackground>
      <PetDetailImage source={randomImageSouce} />
      {/* Name */}
      <RegularText
        textStyles={{ color: colors.tertiray, marginBottom: 10, fontSize: 25 }}
      >
        <Ionicons name="paw" color={colors.tertiray} size={25} /> Name
      </RegularText>
      <RegularText textStyles={{ color: colors.primary, marginBottom: 15 }}>
        {props.name}
      </RegularText>

      {/* Height */}
      <RegularText
        textStyles={{ color: colors.tertiray, marginBottom: 10, fontSize: 20 }}
      >
        Height
      </RegularText>
      <RegularText textStyles={{ color: colors.primary, marginBottom: 15 }}>
        {props.height}
      </RegularText>

      {/* Weight */}
      <RegularText
        textStyles={{ color: colors.tertiray, marginBottom: 10, fontSize: 20 }}
      >
        Weight
      </RegularText>
      <RegularText textStyles={{ color: colors.primary, marginBottom: 15 }}>
        {props.weight}
      </RegularText>

      {/* Type */}
      <RegularText
        textStyles={{ color: colors.tertiray, marginBottom: 10, fontSize: 20 }}
      >
        Type
      </RegularText>
      <RegularText textStyles={{ color: colors.primary, marginBottom: 15 }}>
        {props.type}
      </RegularText>

      {/* Note */}
      <RegularText
        textStyles={{ color: colors.tertiray, marginBottom: 10, fontSize: 20 }}
      >
        Description
      </RegularText>
      <RegularText textStyles={{ color: colors.primary, marginBottom: 15 }}>
        {props.description}
      </RegularText>
    </PetDetailSectionBackground>
  );
};

export default PetDetailSection;

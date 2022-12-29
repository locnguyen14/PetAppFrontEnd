import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

//Custom Components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import BigText from "../Texts/BigText";

import { View, Image } from "react-native";

const PetDetailSectionBackground = styled.View`
  width: 100%
  padding-top: 5px;
  align-items: left-align;
  flex: 3;
`;

//types
import { PetDetailProps } from "./types";

const PetDetailSection: FunctionComponent<PetDetailProps> = (props) => {
  return (
    <PetDetailSectionBackground>
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

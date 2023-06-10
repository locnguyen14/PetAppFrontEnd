import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";

//Custom Components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import { Image } from "react-native";

const PetDetailImage = styled(Image);

const PetDetailSectionBackground = styled(View);

//types
import { PetDetailProps } from "./types";
import { View } from "react-native";

const PetDetailSection: FunctionComponent<PetDetailProps> = (props) => {
  return (
    <PetDetailSectionBackground className="flex flex-col px-2 space-y-5">
      <PetDetailImage
        className=" h-40 bg-amber-900 object-none"
        source={{ uri: props.image }}
      />
      <View className="flex flex-row justify-around">
        <View>
          {/* Name */}
          <RegularText textStyles={{ color: colors.tertiray }}>
            <Ionicons name="paw" color={colors.tertiray} /> Name
          </RegularText>
          <RegularText textStyles={{ color: colors.primary }}>
            {props.name}
          </RegularText>
        </View>

        <View>
          {/* Height */}
          <RegularText textStyles={{ color: colors.tertiray }}>
            Height
          </RegularText>
          <RegularText textStyles={{ color: colors.primary }}>
            {props.height}
          </RegularText>
        </View>
      </View>
      <View className="flex flex-row justify-around">
        <View>
          {/* Weight */}
          <RegularText textStyles={{ color: colors.tertiray }}>
            Weight
          </RegularText>
          <RegularText textStyles={{ color: colors.primary }}>
            {props.weight}
          </RegularText>
        </View>

        <View>
          {/* Type */}
          <RegularText textStyles={{ color: colors.tertiray }}>
            Type
          </RegularText>
          <RegularText textStyles={{ color: colors.primary }}>
            {props.type}
          </RegularText>
        </View>
      </View>
      <View className="flex flex-row justify-around">
        <View>
          {/* Note */}
          <RegularText textStyles={{ color: colors.tertiray }}>
            Description
          </RegularText>
          <RegularText textStyles={{ color: colors.primary }}>
            {props.description}
          </RegularText>
        </View>
      </View>
    </PetDetailSectionBackground>
  );
};

export default PetDetailSection;

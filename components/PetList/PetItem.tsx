import React, { FunctionComponent } from "react";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styled } from "nativewind";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import PetAvi from "./PetAvi";

//Navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/Home";

const PetTouchable = styled(TouchableOpacity);
const TouchableView = styled(View);
const LeftView = styled(View);
const RightView = styled(View);

//types
import { PetProps } from "./types";

const PetItem: FunctionComponent<PetProps> = (props) => {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const handlePress = () => {
    navigation.navigate("PetDetails", { ...props });
  };

  return (
    <PetTouchable onPress={handlePress}>
      <TouchableView className=" h-24 flex flex-row justify-between">
        <LeftView className="flex flex-row">
          <PetAvi background={colors.primary} icon={props.image} />
          <View>
            <RegularText
              textStyles={{
                color: colors.tertiray,
                marginBottom: 5,
              }}
            >
              {props.name}
            </RegularText>
            <SmallText
              textStyles={{ color: colors.primary, textAlign: "left" }}
            >
              {props.description}
            </SmallText>
          </View>
        </LeftView>
        <RightView>
          <RegularText
            textStyles={{
              color: colors.tertiray,
              marginBottom: 5,
            }}
          >
            {props.type}
          </RegularText>
        </RightView>
      </TouchableView>
    </PetTouchable>
  );
};

export default PetItem;

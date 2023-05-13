import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { styled as windStyled } from "nativewind";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import PetAvi from "./PetAvi";

//Navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/Home";

const PetTouchable = styled.TouchableHighlight`
  height: 50%;
  border-radius: 25px;
`;

// const TouchableView = styled.View`
//   justify-content: space-between;
//   align-item: center;
//   padding: 0.5px;
//   flex: 1;
// `;
const TouchableView = windStyled(View);

// const PetRow = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

const PetRow = windStyled(View);

// const LeftView = styled.View`
//   flex-direction: row;
//   justify-content: flex-start;
//   height: 100%;
//   align-items: center;
//   flex: 2;
// `;
const LeftView = windStyled(View);

// const RightView = styled.View`
//   flex: 1;
// `;
const RightView = windStyled(View);

//types
import { PetProps } from "./types";

const PetItem: FunctionComponent<PetProps> = (props) => {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const handlePress = () => {
    navigation.navigate("PetDetails", { ...props });
  };

  return (
    <PetTouchable
      underlayColor={colors.graylight}
      activeOpacity={0.6}
      onPress={handlePress}
    >
      <TouchableView className=" grow-0 flex flex-row justify-between">
        <LeftView className="flex flex-row justify-start">
          <PetAvi background={props.art.background} icon={props.art.icon} />
          <View>
            <RegularText
              textStyles={{
                color: colors.tertiray,
                textAlign: "left",
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
              textAlign: "right",
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

import React, { FunctionComponent } from "react";
import { styled } from "nativewind";
import { StyleProp, TextStyle, View } from "react-native";

// custom components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../colors";

const StyleView = styled(View);

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyleView className=" flex flex-col ">
      <RegularText
        textStyles={[
          { color: colors.tertiray, fontSize: 22 },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[{ color: colors.black }, props.subTextStyles]}>
        {props.subText}
      </SmallText>
    </StyleView>
  );
};

export default Greeting;

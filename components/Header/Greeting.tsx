import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";

// custom components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { colors } from "../colors";

const StyleView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyleView>
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

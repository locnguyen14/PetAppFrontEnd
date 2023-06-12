import React, { FunctionComponent } from "react";
import { styled } from "nativewind";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

import RegularText from "../Texts/RegularText";

// // defining the view
// const ButtonView = styled.TouchableOpacity`
//   align-items: center;
//   background-color: ${colors.white};
//   width: 100%;
//   padding: 20px;
//   border-radius: 20px;
// `;

const ButtonView = styled(
  TouchableOpacity,
  "items-center bg-slate-100 w-full p-5 rounded-2xl"
);

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;

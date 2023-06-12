import React, { FunctionComponent } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styled } from "nativewind";
import RegularText from "../Texts/RegularText";

const ButtonText = styled(Text);
const ButtonVIew = styled(TouchableOpacity);

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const SubmitButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonVIew
      className=" bg-cover bg-blue-500 items-center rounded-lg px-8 py-4"
      onPress={props.onPress}
    >
      <RegularText textStyles={{ color: "white" }}>
        {props.children}
      </RegularText>
    </ButtonVIew>
  );
};

export default SubmitButton;

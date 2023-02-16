import React, { FunctionComponent } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styled } from "nativewind";

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
      <ButtonText className=" font-medium text-slate-100 text-base">
        {props.children}
      </ButtonText>
    </ButtonVIew>
  );
};

export default SubmitButton;

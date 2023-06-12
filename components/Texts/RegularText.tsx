import React, { FunctionComponent } from "react";
import { styled } from "nativewind";

import { TextProps } from "./types";
import { Text } from "react-native";

const StyledText = styled(Text, " text-base text-left ");

const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;

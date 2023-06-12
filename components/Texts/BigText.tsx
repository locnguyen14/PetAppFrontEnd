import React, { FunctionComponent } from "react";
import { styled } from "nativewind";
import { Text } from "react-native";

import { TextProps } from "./types";

const StyledText = styled(Text, " text-3xl text-left text-amber-100");

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;

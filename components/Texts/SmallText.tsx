import React, { FunctionComponent } from "react";
import { styled } from "nativewind";

import { TextProps } from "./types";
import { Text } from "react-native";

const StyledText = styled(Text, "text-sm text-gray-500 text-center");

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;

import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
  font-size: 33px;
  color: ${colors.accent};
  text-align: left;
  font-family: Raleway-Bold;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;

import React, { FunctionComponent, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar"; // zone above the screen where you see all the wifi shit
import styled from "styled-components/native";
import { View } from "react-native";

//custom components
import { colors } from "../colors";
import { Container } from "../shared";
import RegularText from "../Texts/RegularText";
import { ScreenWidth } from "./../shared";

//TODO: rewrite this form with Formik

// Styling
const FormGroup = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const FormLabel = styled(RegularText)`
  font-size: 25px;
`;

const Input = styled.TextInput`
  margin-top: 5;
  margin-bottom: 10;
  width: ${ScreenWidth * 0.85}px;
  height: 40;
  padding-horizontal: 5px;
  border-radius: 25px;
  background-color: ${colors.white};
`;

const PetForm: FunctionComponent = () => {
  return (
    <FormGroup>
      <View>
        <View>
          <FormLabel>Pet Name</FormLabel>
          <Input placeholder="" value="Sung" />
        </View>
        <View>
          <FormLabel>Weight</FormLabel>
          <Input placeholder="" value="12" />
        </View>
        <View>
          <FormLabel>Height</FormLabel>
          <Input placeholder="" value="12" />
        </View>
      </View>
    </FormGroup>
  );
};

export default PetForm;

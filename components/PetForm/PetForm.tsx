import React, { FunctionComponent, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar"; // zone above the screen where you see all the wifi shit
import styled from "styled-components/native";
import { View, Button } from "react-native";

//custom components
import { colors } from "../colors";
import { Container } from "../shared";
import RegularText from "../Texts/RegularText";
import { ScreenWidth } from "./../shared";

import { PetFormValues } from "./types";
import { Formik } from "formik";

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
  const initialValues: PetFormValues = {
    id: "",
    name: "",
    weight: 0,
    height: 0,
    description: "",
    type: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Submitted: ", values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <FormLabel> Pet Name </FormLabel>
          <Input value={values.name} onChangeText={handleChange("name")} />

          <FormLabel> Weight (kg) </FormLabel>
          <Input
            value={`${values.weight}`}
            keyboardType="numeric"
            onChangeText={handleChange("weight")}
          />

          <FormLabel> Height (m) </FormLabel>
          <Input
            value={`${values.height}`}
            keyboardType="numeric"
            onChangeText={handleChange("height")}
          />

          <FormLabel> Description </FormLabel>
          <Input
            multiline
            value={values.description}
            keyboardType="numeric"
            onChangeText={handleChange("description")}
          />

          <Button onPress={() => handleSubmit()} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default PetForm;

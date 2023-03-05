import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-gesture-handler";

//custom components
import { colors } from "../colors";
import { ScreenWidth } from "./../shared";
import FormLabel from "../Texts/FormLabel";
import SubmitButton from "../Buttons/SubmitButton";

import { PetFormValues } from "./types";
import { Formik } from "formik";

// services
import PetService from "../../services/PetService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "navigators/AuthStack";

// Styling
const Input = styled.TextInput`
  margin-top: 5;
  margin-bottom: 10;
  width: ${ScreenWidth * 0.85}px;
  height: 40;
  padding-horizontal: 5px;
  border-radius: 25px;
  background-color: ${colors.white};
`;

interface AnimalType {
  key: number;
  value: string;
}

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, "AddPet">;
};

const PetForm: FunctionComponent<Props> = ({ navigation }) => {
  const PetCategory: AnimalType[] = [
    { key: 0, value: "Dog" },
    { key: 1, value: "Cat" },
    { key: 2, value: "Others" },
  ];
  const initialValues: PetFormValues = {
    name: "",
    weight: 0,
    height: 0,
    note: "",
    animalType: 0,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        PetService.create(values)
          .then((response) => {
            console.log("Successful response: ", response);
            navigation.navigate("Home");
          })
          .catch((error) => console.log("Error: ", error));
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View className="flex-1">
          <View className="p-4">
            <FormLabel text="Pet Name" />
            <TextInput
              className=" bg-gray-100 border border-gray-100 rounded-md p-2 mb-4"
              value={values.name}
              onChangeText={handleChange("name")}
            />

            <FormLabel text="Weight" />
            <TextInput
              className=" bg-gray-100 border border-gray-100 rounded-md p-2 mb-4"
              value={`${values.weight}`}
              keyboardType="numeric"
              onChangeText={handleChange("weight")}
            />

            <FormLabel text="Height" />
            <TextInput
              className=" bg-gray-100 border border-gray-100 rounded-md p-2 mb-4"
              value={`${values.height}`}
              keyboardType="numeric"
              onChangeText={handleChange("height")}
            />

            <FormLabel text="Description" />
            <TextInput
              className=" bg-gray-100 border border-gray-100 rounded-md p-2 mb-4"
              multiline
              value={values.note}
              onChangeText={handleChange("note")}
            />

            <FormLabel text="Pet Type" />
            <SelectList
              setSelected={(field: AnimalType) => {
                handleChange("animalType");
              }}
              data={PetCategory}
              save="key"
            />
          </View>
          <SubmitButton onPress={() => handleSubmit()}>Submit</SubmitButton>
        </View>
      )}
    </Formik>
  );
};

export default PetForm;

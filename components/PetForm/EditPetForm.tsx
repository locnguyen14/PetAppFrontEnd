import React, { FunctionComponent, useState, useCallback } from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-gesture-handler";

//custom components
import FormLabel from "../Texts/FormLabel";
import SubmitButton from "../Buttons/SubmitButton";

import { PetFormValues } from "./types";
import { Formik } from "formik";

// services
import PetService from "../../services/PetService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// types
interface AnimalType {
  key: number;
  value: string;
}
type EditPetFormProps = {
  petId: string;
};
import { Props as EditPetPageProps } from "../../screens/EditPet";

const EditPetForm: FunctionComponent<EditPetFormProps> = ({ petId }) => {
  const navigation = useNavigation<EditPetPageProps["navigation"]>();
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
  const [currentPetValue, setCurrentPetValue] =
    useState<PetFormValues>(initialValues);
  const loadPetDetails = async () => {
    console.log("Load Pet Detail");
    try {
      var newPetDetail = (await PetService.getDetails(petId)).data.results;
      setCurrentPetValue(newPetDetail);
    } catch (error) {
      console.log("Error Loading Pet Details: ", error);
    }
  };
  useFocusEffect(() => {
    useCallback(() => {
      return () => loadPetDetails();
    }, [petId]);
  });

  return (
    <Formik
      initialValues={currentPetValue}
      onSubmit={(values) => {
        PetService.edit(values, petId)
          .then((response) => {
            console.log("Successful Edit Animal: ", response);
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
          <SubmitButton onPress={() => handleSubmit()}>Edit</SubmitButton>
        </View>
      )}
    </Formik>
  );
};

export default EditPetForm;

import React, { FunctionComponent, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

// types
import { PetCategory } from "./types";
import { Props as AddPetPageProps } from "../../screens/AddPet";

const AddPetForm: FunctionComponent = () => {
  const navigation = useNavigation<AddPetPageProps["navigation"]>();
  const [animalTypeValue, setAnimalTypeValue] = useState(0);
  const initialValues: PetFormValues = {
    name: "",
    weight: 0,
    height: 0,
    note: "",
    animalType: animalTypeValue,
  };
  const SubmitAddPetForm = (values: PetFormValues) => {
    const newPetValue = { ...values, animalType: animalTypeValue };
    PetService.create(newPetValue)
      .then((response) => {
        console.log("Successful response add pet: ", response);
        navigation.navigate("Home");
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={SubmitAddPetForm}>
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
              setSelected={(key: number) => setAnimalTypeValue(key)}
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

export default AddPetForm;

import React, { FunctionComponent, useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-gesture-handler";

//custom components
import FormLabel from "../Texts/FormLabel";
import SubmitButton from "../Buttons/SubmitButton";

import { PetFormValues } from "./types";
import { Formik } from "formik";

// services
import PetService from "../../services/PetService";
import { useIsFocused, useNavigation } from "@react-navigation/native";

// types
import { PetCategory } from "./types";

import { EditPetFormProps } from "./types";
import { Props as EditPetPageProps } from "../../screens/EditPet";

const EditPetForm: FunctionComponent<EditPetFormProps> = (props) => {
  const { id, name, weight, height, description, type, image } = props;
  const [animalTypeValue, setAnimalTypeValue] = useState(
    PetCategory.find((item) => item.value === type)?.key ?? 0
  );
  const petId = id.toString();
  const navigation = useNavigation<EditPetPageProps["navigation"]>();
  const isFocused = useIsFocused();

  const initialValues: PetFormValues = {
    name,
    weight,
    height,
    note: description,
    animalType: animalTypeValue,
    image: image ?? "",
  };
  const [currentPetValue, setCurrentPetValue] =
    useState<PetFormValues>(initialValues);
  const SubmitEditPetForm = (values: PetFormValues) => {
    const editPetValue = { ...values, animalType: animalTypeValue };
    PetService.edit(editPetValue, petId)
      .then((response) => {
        console.log("Successful Edit Animal: ", response);
        navigation.navigate("Home");
      })
      .catch((error) => console.log("Error: ", error));
  };

  useEffect(() => {
    const loadPetDetails = async () => {
      console.log("Load Pet Detail");
      try {
        const newPetDetail = (await PetService.getDetails(petId)).data.results;
        setCurrentPetValue(newPetDetail);
      } catch (error) {
        console.log("Error Loading Pet Details: ", error);
      }
    };
    if (isFocused) {
      loadPetDetails();
    }
  }, [isFocused]);

  return (
    <Formik initialValues={currentPetValue} onSubmit={SubmitEditPetForm}>
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView keyboardShouldPersistTaps="never">
          <View className="p-2">
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
          <SubmitButton onPress={() => handleSubmit()}>Edit</SubmitButton>
        </ScrollView>
      )}
    </Formik>
  );
};

export default EditPetForm;

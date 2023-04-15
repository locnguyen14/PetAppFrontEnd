import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from "react";
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
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";

// types
interface AnimalType {
  key: number;
  value: string;
}

import { EditPetFormProps } from "./types";
import { Props as EditPetPageProps } from "../../screens/EditPet";

const EditPetForm: FunctionComponent<EditPetFormProps> = (props) => {
  const PetCategory: AnimalType[] = [
    { key: 0, value: "Dog" },
    { key: 1, value: "Cat" },
    { key: 2, value: "Others" },
  ];
  const { id, name, weight, height, description, type } = props;
  const [animalTypeValue, setAnimalTypeValue] = useState(
    PetCategory.find((item) => item.value === type)?.key ?? 0
  );
  const petId = id.toString();
  const navigation = useNavigation<EditPetPageProps["navigation"]>();
  const isFocused = useIsFocused();

  const initialValues: PetFormValues = {
    name: name,
    weight: weight,
    height: height,
    note: description,
    animalType: animalTypeValue,
  };
  const [currentPetValue, setCurrentPetValue] =
    useState<PetFormValues>(initialValues);

  useEffect(() => {
    const loadPetDetails = async () => {
      console.log("Load Pet Detail");
      try {
        var newPetDetail = (await PetService.getDetails(petId)).data.results;
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
    <Formik
      initialValues={currentPetValue}
      onSubmit={(values) => {
        const editPetValue: PetFormValues = {
          name: values.name,
          weight: values.weight,
          height: values.height,
          note: values.note,
          animalType: animalTypeValue,
        };
        PetService.edit(editPetValue, petId)
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
              setSelected={(key: number) => setAnimalTypeValue(key)}
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

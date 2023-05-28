import React, { FunctionComponent, useState } from "react";
import { View, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  ImagePickerAsset,
  MediaTypeOptions,
  launchImageLibraryAsync,
} from "expo-image-picker";

//custom components
import FormLabel from "../Texts/FormLabel";
import SubmitButton from "../Buttons/SubmitButton";

import { PetFormValues } from "./types";
import { Formik } from "formik";

// services
import PetService from "../../services/PetService";

// types
import { PetCategory } from "./types";
import { Props as AddPetPageProps } from "../../screens/AddPet";
import RegularButton from "../Buttons/RegularButton";

const AddPetForm: FunctionComponent = () => {
  const navigation = useNavigation<AddPetPageProps["navigation"]>();
  const [animalTypeValue, setAnimalTypeValue] = useState(0);
  const [animalPhoto, setAnimalPhoto] = useState<
    ImagePickerAsset | undefined
  >();
  const initialValues: PetFormValues = {
    name: "",
    weight: 0,
    height: 0,
    note: "",
    animalType: animalTypeValue,
    image: "",
  };
  const SubmitAddPetForm = (values: PetFormValues) => {
    const newPetValue: PetFormValues = {
      ...values,
      animalType: animalTypeValue,
      image: animalPhoto?.base64 ?? "",
    };
    PetService.create(newPetValue)
      .then((response) => {
        console.log("Successful response add pet");
        navigation.navigate("Home");
      })
      .catch((error) => console.log("Error: ", error));
  };

  const HandleChoosePhoto = async () => {
    console.log("Begin handle choose photo");
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      quality: 0.5,
      base64: true,
    });
    if (!result.canceled) {
      setAnimalPhoto(result.assets[0]);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={SubmitAddPetForm}>
      {({ handleChange, handleSubmit, values }) => (
        <View className="flex-1">
          <View className="p-4">
            <RegularButton onPress={HandleChoosePhoto}>
              Upload Photo
            </RegularButton>
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
            {animalPhoto && (
              <>
                <Image
                  source={{ uri: animalPhoto.uri }}
                  style={{ width: 200, height: 150 }}
                />
              </>
            )}
          </View>
          <SubmitButton onPress={() => handleSubmit()}>
            Save Animal
          </SubmitButton>
        </View>
      )}
    </Formik>
  );
};

export default AddPetForm;

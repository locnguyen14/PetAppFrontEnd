import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { styled as windStyled } from "nativewind";
import { View } from "react-native";

// custom components
import RegularButton from "../components/Buttons/RegularButton";
import PetDetailSection from "../components/PetDetail/PetDetailSection";

import PetService from "../services/PetService";

const PetDetailContainer = windStyled(View);
const ButtonContainer = windStyled(View);

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<AuthStackParamList, "PetDetails">;

const PetDetails: FunctionComponent<Props> = ({ route, navigation }) => {
  const petId = route.params.id.toString();
  const HandleDelete = () => {
    PetService.remove(petId)
      .then((response) => {
        console.log("Successfully Delete Animal", response);
        navigation.navigate("Home");
      })
      .catch((error) => console.log("Error during delete: ", error));
  };

  const ToEditPage = () => {
    console.log("Inside To Edit Page?");
    navigation.navigate("EditPet", { ...route.params });
  };

  return (
    <PetDetailContainer className="flex flex-col space-y-0">
      <StatusBar style="dark" />
      <PetDetailSection {...route?.params} />
      <ButtonContainer className="flex flex-row">
        <View className="w-1/2 p-2">
          <RegularButton
            btnStyles={{ backgroundColor: "red" }}
            textStyles={{ color: "white" }}
            onPress={() => HandleDelete()}
          >
            Delete
          </RegularButton>
        </View>
        <View className="w-1/2 p-2">
          <RegularButton onPress={() => ToEditPage()}>Edit</RegularButton>
        </View>
      </ButtonContainer>
    </PetDetailContainer>
  );
};

export default PetDetails;

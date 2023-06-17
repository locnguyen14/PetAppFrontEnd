import React, { FunctionComponent, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar"; // zone above the screen where you see all the wifi shit
import { useIsFocused } from "@react-navigation/native";
import { styled } from "nativewind";

//custom components
import PetSection from "../components/PetList/PetSection";
import { View } from "react-native";

// services
import PetService from "../services/PetService";

const HomeContainer = styled(View);

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import { PetListProp } from "../components/PetList/types";
import SubmitButton from "../components/Buttons/SubmitButton";
import { useAuth } from "../context/Auth";

export type Props = StackScreenProps<AuthStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const [petData, setPetData] = useState<PetListProp[]>([]);
  const isFocused = useIsFocused();
  const auth = useAuth();
  const loadPets = async () => {
    console.log("Load Pets");
    try {
      var pets = await PetService.getAll();
      // TODO: how do we ensure item here to be the same type of the value on the back-end
      var newPetData = pets.data.results.map((item: any) => ({
        name: item.name,
        id: item.animal_id,
        weight: item.weight,
        height: item.height,
        description: item.note,
        type: item.animalType,
        image: item.image,
      }));
      setPetData(newPetData);
    } catch (error) {
      console.log("Error Loading Pets: ", error);
    }
  };

  const handleSubmit = () => {
    console.log("Signout Button hit");
    auth.signOut();
  };

  useEffect(() => {
    if (isFocused) {
      loadPets();
    }
  }, [isFocused]);

  return (
    <HomeContainer className="w-full">
      <StatusBar style="dark" />
      <PetSection data={petData} />
      <SubmitButton onPress={() => handleSubmit()}>Sign Out</SubmitButton>
    </HomeContainer>
  );
};

export default Home;

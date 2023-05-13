import React, { FunctionComponent, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar"; // zone above the screen where you see all the wifi shit
import { useIsFocused } from "@react-navigation/native";
import { styled } from "nativewind";

//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import PetSection from "../components/PetList/PetSection";
import { View } from "react-native";

// services
import PetService from "../services/PetService";

// const HomeContainer = styled(Container)`
//   background-color: ${colors.graylight};
//   width: 100%;
//   flex: 1;
// `;
const HomeContainer = styled(View);

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import { PetProps } from "../components/PetList/types";
export type Props = StackScreenProps<AuthStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const [petData, setPetData] = useState<PetProps[]>([]);
  const isFocused = useIsFocused();
  const loadPets = async () => {
    console.log("Load Pets");
    try {
      var pets = await PetService.getAll();
      var newPetData = pets.data.results.map((item) => ({
        name: item.name,
        id: item.animal_id,
        weight: item.weight,
        height: item.height,
        description: item.note,
        type: item.animalType,
        art: { icon: "cat", background: colors.primary },
      }));
      setPetData(newPetData);
    } catch (error) {
      console.log("Error Loading Pets: ", error);
    }
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
    </HomeContainer>
  );
};

export default Home;

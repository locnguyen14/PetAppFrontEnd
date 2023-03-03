import React, { FunctionComponent, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar"; // zone above the screen where you see all the wifi shit
import styled from "styled-components/native";

//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import PetSection from "../components/PetList/PetSection";

// services
import PetService from "../services/PetService";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

// types
import { AuthStackParamList } from "../navigators/AuthStack";
import { StackScreenProps } from "@react-navigation/stack";
import { PetProps } from "../components/PetList/types";
export type Props = StackScreenProps<AuthStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const [petData, setPetData] = useState<PetProps[]>([]);
  const loadPets = async () => {
    console.log("Load Pets");
    try {
      var pets = await PetService.getAll();
      console.log("Pets are: ", pets);
      var petsList = pets.data.results;
      setPetData(
        petsList.map((item) => ({
          name: item.name,
          id: item.animal_id,
          weight: item.weight,
          height: item.height,
          description: item.note,
          type: item.animalType,
          art: { icon: "cat", background: colors.primary },
        }))
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // use your machine IP for talking to emulator, remember to set the proxy field in the package.json as well
    loadPets();
  }, []);

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <PetSection data={petData} />
    </HomeContainer>
  );
};

export default Home;

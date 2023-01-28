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
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { PetProps } from "../components/PetList/types";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const [petData, setPetData] = useState<PetProps[]>([]);
  useEffect(() => {
    // use your machine IP for talking to emulator, remember to set the proxy field in the package.json as well
    PetService.getAll()
      .then((response) => {
        console.log(response.data);
        var petList = response.data.results;
        setPetData(
          petList.map((item) => ({
            name: item.name,
            id: item.animal_id,
            weight: item.weight,
            height: item.height,
            description: item.note,
            type: item.animalType,
            art: { icon: "cat", background: colors.primary },
          }))
        );
      })
      .catch((error) => console.log("Error Fetching data: ", error));
  }, []);

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <PetSection data={petData} />
    </HomeContainer>
  );
};

export default Home;

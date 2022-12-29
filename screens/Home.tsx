import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar"; // zone above the screen where you see all the wifi shit
import styled from "styled-components/native";

//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import PetSection from "../components/PetList/PetSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  //Harcoded data, even the data is not in the right shape of the PetProps (extra fields), it still show
  const petData = [
    {
      id: 1,
      name: "Gun",
      height: 10,
      weight: 10,
      description: "Active cat",
      type: "Cat",
      art: {
        icon: "cat",
        background: colors.tertiray,
      },
    },
    {
      id: 2,
      name: "Bullet",
      height: 10,
      weight: 10,
      description: "Introvert Cat",
      type: "Cat",
      art: {
        icon: "cat",
        background: colors.tertiray,
      },
    },
    {
      id: 3,
      name: "Clover",
      height: 10,
      weight: 10,
      description: "Obese Cat",
      type: "Cat",
      art: {
        icon: "cat",
        background: colors.tertiray,
      },
    },
    {
      id: 4,
      name: "Butt",
      height: 10,
      weight: 10,
      description: "Weird Cat",
      type: "Cat",
      art: {
        icon: "cat",
        background: colors.tertiray,
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <PetSection data={petData} />
    </HomeContainer>
  );
};

export default Home;

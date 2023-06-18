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
import RegularButton from "../components/Buttons/RegularButton";
import { colors } from "../components/colors";

export type Props = StackScreenProps<AuthStackParamList, "Home">;

const Home: FunctionComponent<Props> = ({ route, navigation }) => {
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

  const toAddPetPage = () => {
    console.log("Navigate to Add Pet Page");
    navigation.navigate("AddPet");
  };

  useEffect(() => {
    if (isFocused) {
      loadPets();
    }
  }, [isFocused]);

  return (
    <HomeContainer
      style={{ backgroundColor: colors.graylight }}
      className="flex flex-col w-full h-full px-3"
    >
      <StatusBar style="dark" />
      <PetSection data={petData} />
      <View className="flex flex-row justify-around pt-6">
        <RegularButton
          btnStyles={{ width: "50%" }}
          onPress={() => toAddPetPage()}
        >
          AddPet
        </RegularButton>
        <RegularButton
          btnStyles={{ backgroundColor: "red", width: "50%" }}
          onPress={() => handleSubmit()}
        >
          Sign Out
        </RegularButton>
      </View>
    </HomeContainer>
  );
};

export default Home;

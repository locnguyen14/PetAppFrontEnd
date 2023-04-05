import React, { FunctionComponent } from "react";
// import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import PetItem from "./PetItem";

//types
import { PetSectionProps } from "./types";
import SubmitButton from "../Buttons/SubmitButton";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { styled } from "nativewind";

import { useAuth } from "../../context/Auth";

const PetSectionBackGround = styled(View);
const PetRow = styled(View);
const StyleText = styled(Text);
const PetList = styled(FlatList);

const PetSection: FunctionComponent<PetSectionProps> = (props) => {
  const auth = useAuth();
  return (
    <PetSectionBackGround className="flex">
      <PetRow className="basis-auto flex flex-row space-x-72 ">
        <StyleText>Animal</StyleText>
        <StyleText>Type</StyleText>
      </PetRow>
      <SafeAreaView>
        <PetList
          data={props.data}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <PetItem {...item} />}
        />
      </SafeAreaView>
    </PetSectionBackGround>
  );
};

export default PetSection;

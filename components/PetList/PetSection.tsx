import React, { FunctionComponent } from "react";

import PetItem from "./PetItem";

//types
import { PetSectionProps } from "./types";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styled } from "nativewind";

const PetSectionBackGround = styled(View);
const PetRow = styled(View);
const StyleText = styled(Text);
const PetList = styled(FlatList);

const PetSection: FunctionComponent<PetSectionProps> = (props) => {
  return (
    <PetSectionBackGround className=" flex flex-col">
      <PetRow className="flex flex-row justify-between">
        <StyleText>ANIMAL</StyleText>
        <StyleText>TYPE</StyleText>
      </PetRow>
      <SafeAreaView className="h-full">
        <PetList
          className="flex"
          data={props.data}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <PetItem {...item} />}
        />
      </SafeAreaView>
    </PetSectionBackGround>
  );
};

export default PetSection;

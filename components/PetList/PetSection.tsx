import React, { FunctionComponent } from "react";

import PetItem from "./PetItem";

//types
import { PetSectionProps } from "./types";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styled } from "nativewind";
import RegularText from "../Texts/RegularText";

const PetSectionBackGround = styled(View);
const PetRow = styled(View);
const StyleText = styled(Text);
const PetList = styled(FlatList);

const PetSection: FunctionComponent<PetSectionProps> = (props) => {
  return (
    <PetSectionBackGround className=" flex flex-col h-5/6 max-h-full">
      <PetRow className="flex flex-row justify-between mb-5">
        <RegularText textStyles={{ fontSize: 20 }}> Animal </RegularText>
        <RegularText textStyles={{ fontSize: 20 }}> Type </RegularText>
      </PetRow>
      <SafeAreaView>
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

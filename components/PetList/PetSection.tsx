import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import PetItem from "./PetItem";

//types
import { PetSectionProps } from "./types";

const PetSectionBackGround = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;

const PetRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PetList = styled.FlatList`
  width: 100%;
`;

const PetSection: FunctionComponent<PetSectionProps> = (props) => {
  return (
    <PetSectionBackGround>
      <PetRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.black }}>
          Pets
        </RegularText>
        {/* TODO: add icon */}
        <SmallText textStyles={{ color: colors.black }}>Pet Type</SmallText>
      </PetRow>

      <PetList
        data={props.data}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <PetItem {...item} />}
      />
    </PetSectionBackGround>
  );
};

export default PetSection;

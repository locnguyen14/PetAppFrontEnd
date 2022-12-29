import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText"; // curly braces for named export
import SmallText from "../components/Texts/SmallText"; // no curly braces only for default export
import RegularButton from "../components/Buttons/RegularButton";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.primary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

//image
import background from "./../assets/background/background_welcome.jpg";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "80%", marginBottom: 25 }}>
            Playground for your pets
          </BigText>
          <SmallText textStyles={{ width: "80%", marginBottom: 25 }}>
            Pet Knowledge Center and Scheduling Appointment
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Meet Pets
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

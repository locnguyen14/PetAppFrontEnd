import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";

import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText"; // curly braces for named export
import SmallText from "../components/Texts/SmallText"; // no curly braces only for default export
import RegularButton from "../components/Buttons/RegularButton";

const WelcomeContainer = styled(
  Container,
  "bg-orange-200 justify-between w-full h-full"
);

const TopSection = styled(View, "w-full flex-1 max-h-full");
const BottomSection = styled(View, "w-full p-7 flex-1 justify-end");
const TopImage = styled(Image, "object-fill w-full h-full");

//image
import background from "./../assets/background/background_welcome.jpg";

// types
import { AppStackParamList } from "../navigators/AppStack";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Image } from "react-native";
type Props = StackScreenProps<AppStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText
            textStyles={{ width: "100%", marginBottom: 10, textAlign: "left" }}
          >
            Playground for your pets
          </BigText>
          <SmallText
            textStyles={{ width: "80%", marginBottom: 25, textAlign: "left" }}
          >
            Pet Knowledge Center and Scheduling Appointment
          </SmallText>
          <RegularButton
            btnStyles={{ marginBottom: 10 }}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            Sign In
          </RegularButton>
          <RegularButton
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

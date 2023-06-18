import { Dimensions, View } from "react-native";
import { styled } from "nativewind";

export const Container = styled(View, "flex-1 items-center bg-white");

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

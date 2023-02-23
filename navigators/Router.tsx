import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../context/Auth";

export const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <></>;
  }
  return (
    <NavigationContainer>
      {authData?.token ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

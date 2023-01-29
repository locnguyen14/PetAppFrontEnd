import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View, TextInput, Button } from "react-native";

// Customisted components
import RegularText from "../components/Texts/RegularText";
import { ScreenWidth } from "../components/shared";
import { colors } from "../components/colors";

// React hook form and Formik
import { Formik } from "formik";

// types
interface FormValues {
  userName: string;
  password: string;
}

// Styling
const FormLabel = styled(RegularText)`
  font-size: 25px;
`;
const Input = styled.TextInput`
  margin-top: 5;
  margin-bottom: 10;
  width: ${ScreenWidth * 0.85}px;
  height: 40;
  padding-horizontal: 5px;
  border-radius: 25px;
  background-color: ${colors.white};
`;

const Register: FunctionComponent = () => {
  const initialValues: FormValues = { userName: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Submitted: ", values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <FormLabel> User Name </FormLabel>
          <Input
            value={values.userName}
            onChangeText={handleChange("userName")}
          />
          <FormLabel> Password </FormLabel>
          <Input
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry={true}
          />
          <Button onPress={() => handleSubmit()} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default Register;

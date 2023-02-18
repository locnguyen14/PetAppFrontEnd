import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View, TextInput, Button, Text } from "react-native";

// Customisted components
import FormLabel from "../components/Texts/FormLabel";
import SubmitButton from "../components/Buttons/SubmitButton";

// React hook form and Formik
import { Formik } from "formik";

import AuthService, { userRegisterFormData } from "../services/auth.service";

const Register: FunctionComponent = () => {
  const initialValues: userRegisterFormData = {
    username: "",
    password: "",
    password2: "",
    email: "",
    first_name: "",
    last_name: "",
  };

  // TODO: Add validation for schema here

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log("Submitted: ", values);
        AuthService.register(values);
        //TODO: what to do after successfully login? navigate to a blank page to add their pets
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View className="flex-1">
          <View className="p-4">
            <FormLabel text="User Name" />
            <TextInput
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4"
              value={values.username}
              onChangeText={handleChange("username")}
            />
            <FormLabel text="Password" />
            <TextInput
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4"
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry={true}
            />
            <FormLabel text="Re-type Password" />
            <TextInput
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4"
              value={values.password2}
              onChangeText={handleChange("password2")}
              secureTextEntry={true}
            />
            <FormLabel text="Email" />
            <TextInput
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <FormLabel text="First Name" />
            <TextInput
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4"
              value={values.first_name}
              onChangeText={handleChange("first_name")}
            />
            <FormLabel text="Last Name" />
            <TextInput
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4"
              value={values.last_name}
              onChangeText={handleChange("last_name")}
            />
            <SubmitButton onPress={() => handleSubmit()}>Register</SubmitButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Register;

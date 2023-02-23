import React, { FunctionComponent } from "react";
import { View, TextInput, Button, Text } from "react-native";

// Customisted components
import FormLabel from "../components/Texts/FormLabel";
import SubmitButton from "../components/Buttons/SubmitButton";

// React hook form and Formik
import { Formik } from "formik";
import { useAuth } from "../context/Auth";

const SignIn: FunctionComponent = () => {
  const auth = useAuth();

  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log("Submitted: ", values);
        await auth.signIn(values.username, values.password);
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
            <SubmitButton onPress={() => handleSubmit()}>Register</SubmitButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;

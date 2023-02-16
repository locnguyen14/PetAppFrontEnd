import { FunctionComponent } from "react";
import { Text } from "react-native";

type FormLabelProps = {
  text: string;
};

const FormLabel: FunctionComponent<FormLabelProps> = ({ text }) => {
  return <Text className="text-xl font-semibold mb-2">{text}</Text>;
};

export default FormLabel;

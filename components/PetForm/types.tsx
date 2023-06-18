import { PetDetailProps } from "../PetDetail/types";

interface AnimalType {
  key: number;
  value: string;
}
export const PetCategory: AnimalType[] = [
  { key: 0, value: "Dog" },
  { key: 1, value: "Cat" },
  { key: 2, value: "Others" },
];

export interface PetFormValues {
  name: string;
  weight: number;
  height: number;
  note: string;
  animalType?: number;
  image?: string;
}

export type EditPetFormProps = Omit<PetDetailProps, "art">;

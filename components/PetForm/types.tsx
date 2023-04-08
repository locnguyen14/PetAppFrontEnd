import { PetDetailProps } from "../PetDetail/types";

export interface PetFormValues {
  name: string;
  weight: number;
  height: number;
  note: string;
  animalType: number;
}

export type EditPetFormProps = Omit<PetDetailProps, "art">;

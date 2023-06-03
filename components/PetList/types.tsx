export interface PetProps {
  id: number;
  name: string;
  weight: number;
  height: number;
  description: string;
  type: string;
  image?: string;
}

export interface PetListProp extends PetProps {}

export interface PetSectionProps {
  data: Array<PetProps>;
}

// Art icon for pet
export interface PetAviProps {
  icon?: string;
  background: string;
}

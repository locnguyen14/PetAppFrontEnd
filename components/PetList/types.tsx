export interface PetProps {
  id: number;
  name: string;
  weight: number;
  height: number;
  description: string;
  type: string;
  art: {
    icon: any; // icon from expo vector for now, replace by pet image, any here and then on the front end just hardcode it
    background: string;
  };
}

export interface PetSectionProps {
  data: Array<PetProps>;
}

// Art icon for pet
export interface PetAviProps {
  icon: any;
  background: string;
}

// axios
import http from "../http-common";

// types
import { PetFormProps } from "../components/PetForm/types";

const getAll = () => {
    return http.get("/animals");
}

const create = (data: PetFormProps) => {
    return http.post<PetFormProps>("/animals", data);
}

const PetService = {getAll, create};

export default PetService;
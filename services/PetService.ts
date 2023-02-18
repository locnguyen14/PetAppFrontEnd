// axios
import http from "../http-common";

// types
import { PetFormValues } from "../components/PetForm/types";

const getAll = () => {
    return http.get("/animals");
}

const create = (data: PetFormValues) => {
    return http.post<PetFormValues>("/animals", data);
}

const PetService = {getAll, create};

export default PetService;
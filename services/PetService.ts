// axios
import {REACT_APP_API_URL} from "@env";
import { authHeader } from "./auth-header";
import axios from "axios";

// types
import { PetFormValues } from "../components/PetForm/types";

const getAll = async () => {
    var header = await authHeader();
    return axios.get(REACT_APP_API_URL + "/animals", {headers: header});
};


const create = async (data: PetFormValues) => {
    var header = await authHeader();
    return axios.post(REACT_APP_API_URL + "/animals", data, {headers:header})
}

const PetService = {getAll, create};

export default PetService;
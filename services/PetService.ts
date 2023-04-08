// axios
import { REACT_APP_API_URL } from "@env";
import { authHeader } from "./auth-header";
import axios from "axios";

// types
import { PetFormValues } from "../components/PetForm/types";

const getAll = async () => {
  var header = await authHeader();
  return axios.get(REACT_APP_API_URL + "/animals", { headers: header });
};

const create = async (data: PetFormValues) => {
  var header = await authHeader();
  return axios.post(REACT_APP_API_URL + "/animals", data, { headers: header });
};

const remove = async (petId: string) => {
  var header = await authHeader();
  return axios.delete(REACT_APP_API_URL + `/animals/${petId}`, {
    headers: header,
  });
};

const getDetails = async (petId: string) => {
  var header = await authHeader();
  return axios.get(REACT_APP_API_URL + `/animals/${petId}`, {
    headers: header,
  });
};

const edit = async (data: PetFormValues, petId: string) => {
  var header = await authHeader();
  return axios.put(REACT_APP_API_URL + `/animals/${petId}`, data, {
    headers: header,
  });
};

const PetService = { getAll, create, remove, getDetails, edit };

export default PetService;

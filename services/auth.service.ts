// axios
import { REACT_APP_API_URL } from "@env";
import axios from "axios";
import localStorage from "./utils/localStorage";
import { storageData } from "./utils/localStorage";

export interface userRegisterFormData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name: string;
    last_name: string;
}

const register = (data: userRegisterFormData) => {
    return axios.post(REACT_APP_API_URL + "/user/register", data);
}

const login = async (username: string, password: string) : Promise<storageData>=> {
    return axios.post(REACT_APP_API_URL + "/user/login", { username: username, password: password })
    .then((response) =>{
        if (response.data.token){
            console.log("Token retrieve: ", response.data.token);
        }
        return response.data;
    })
    .catch((e) =>{console.log("Error during user login request");});
}

const AuthService = {register, login};

export default AuthService;
// axios
import http from "../http-common";
import localStorage from "./utils/localStorage";

export interface userRegisterFormData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name: string;
    last_name: string;
}

const register = (data: userRegisterFormData) => {
    return http.post("/user/register", data)
}

const login = async (username: string, password: string) => {
    const response = await http.post("/user/login", { username: username, password: password });
    console.log(response);
    if (response.data.token) {
        await localStorage.save("user", response.data.result);
    }
    return await response.data;
}

const getCurrentUser = async () => {
    const userStr = await localStorage.getValueFor("user");
}


const AuthService = {register, login};

export default AuthService;
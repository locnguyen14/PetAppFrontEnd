// axios
import http from "../http-common";

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


const AuthService = {register};

export default AuthService;
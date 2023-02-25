import localStorage from "./utils/localStorage"

export const authHeader = async () => {
    const userStr = await localStorage.getValueFor("AuthData");
    var user = null;

    if (userStr){
        user = JSON.parse(userStr);
    }

    if (user && user.token){
        return {'Content-type': 'application/json', Authorization: 'Token ' + user.token};
    }
    else{
        return {'Content-type': 'application/json', Authorization: ''};
    }
}
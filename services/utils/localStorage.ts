import * as SecureStore from 'expo-secure-store';

interface userData{
    id: string;
    first_name: string;
    last_name: string;
    username:string;
}

interface storageData{
    user: userData;
    token: string;
}

const save = async (key:string, data:storageData) => {
    await SecureStore.setItemAsync(key, JSON.stringify(data));
}

const getValueFor = async (key:string) => {
    return await SecureStore.getItemAsync(key);
}

const localStorage = {save, getValueFor};

export default localStorage;


import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FunctionComponent,
} from "react";

import AuthService from "../services/auth.service";
import { storageData } from "../services/utils/localStorage";

import localStorage from "../services/utils/localStorage";

type AuthContextData = {
  authData?: storageData;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<storageData>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Expo Secure Storage
      const authDataSerialized = await localStorage.getValueFor("AuthData");
      console.log("Auth Data Serilized: ", authDataSerialized);
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: storageData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.log("Error during try", error);
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async (username: string, password: string) => {
    //TODO: What if the _authData here is error?
    const _authData = await AuthService.login(username, password);

    //Persist the data in the Async Storage
    //to be recovered in the next user session.
    await localStorage.save("AuthData", _authData);

    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(_authData);
  };

  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(undefined);

    //Remove the data from Async Storage
    //to NOT be recoverede in next session.
    await localStorage.remove("AuthData");
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };

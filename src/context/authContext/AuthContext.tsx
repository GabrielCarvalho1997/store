import { useLocalStorage } from "react-use";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import { AuthResponse, TokenData} from "types/auth";

import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";
import { useConfig } from "context/ConfigContext/ConfigContext";
import { AuthService } from "services/api/axios-config/authService";

type Props = {
    children: ReactNode;
}

type LoginState = {
    username: string;
    password: string;
}

export type AuthContext ={
    signIn: (data: LoginState) => void;
    signOut: () => Promise<void>;
    isAuthenticated: boolean;
    userName: string;
    authData: any;
}


const AuthContextType = createContext<AuthContext>({} as AuthContext);

const AuthProvider = ({ children } : Props) => {
  const [authData, setAuthData, removeAuthData] = useLocalStorage<AuthResponse | undefined>("auth_data", undefined);
  const [userName, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(isLoged());
  // const navigate = useNavigate();
  const {setLoading} = useConfig();

  function isLoged(): boolean {
    if(authData?.token) {
      return true;
    }
    return false;
  }


  function signIn (data:LoginState) { 
    setLoading(true);
    AuthService.login(data)
      .then((res: any) => { 
        console.log(res);
        setAuthData(res);       
      })
      .catch((err: any) => toast.error(JSON.stringify(err)))
      .finally(()=> setLoading(false));
  }

  async function signOut () {
    setUserName("");
    removeAuthData();
  }


  function getTokenData () : TokenData | undefined  {
    try{
      if (authData) {
        return jwtDecode(authData.token) as TokenData;
      }
      return undefined;
    }catch (error){
      return undefined;
    }
  }


  useEffect(() => {
    if(authData?.token) {
      setIsAuthenticated(isLoged);
      const tokenData = getTokenData();
      if (tokenData) {
        setUserName(tokenData.name);
      }
    }else {
      setIsAuthenticated(false);
    }
  }, [authData]);

  const providers = {signIn, signOut, isAuthenticated, userName, authData};

  return (
    <AuthContextType.Provider value={providers}>
      {children}
    </AuthContextType.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContextType);


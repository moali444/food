import { PropsWithChildren, createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext('');

export default function AuthContextProvider(props:PropsWithChildren){

    const [loginData, setLoginData] = useState('');

    const saveLoginData = () => {
        let encodedToken = localStorage.getItem('userToken');
        let decodedToken = jwtDecode(encodedToken);
        setLoginData(decodedToken);
        console.log(decodedToken);
    }

    return <AuthContext.Provider value={{saveLoginData, loginData}}>
        {props.children}
    </AuthContext.Provider>
}
import { createContext, useState, useEffect } from "react";
import { authStateChanged } from '../lib/firebase';
import { useRouter } from 'next/router';

const AuthContext = createContext(null);

export const USER_STATES = {
  UNDEFINED: undefined,
  NOT_LOGGED: null,
};

export default function AuthProvider ({children}) {
    const router = useRouter()
    const [user, setUser] = useState(null);

    useEffect(() => {
      authStateChanged(setUser);
    }, []);

    useEffect(() => {
      user === USER_STATES.NOT_LOGGED && router.replace("/");
    }, [user]);

    return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
    )

}
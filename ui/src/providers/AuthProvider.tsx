import { createContext, useEffect, useState } from "react";
import * as React from "react";
import * as Cookies from "js-cookie"; // ✅ Correct way
import { loginUser, registerUser } from "@/services/authApi";
import { LoginCredentials, RegisterCredentials } from "@/types";

type AuthContextType = {
  user: any | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
};

// create context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ childern }: { childern: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>();

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const userData = await loginUser(credentials);
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), { expires: 7 });
  };

  const register = async (credentials:RegisterCredentials) =>{
    const response = await registerUser(credentials)
    console.log(response)
  }

  return <AuthContext.Provider value={{user,login,register}}>{childern}</AuthContext.Provider>
};

export default AuthContext

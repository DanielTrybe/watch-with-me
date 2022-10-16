import io from "socket.io-client";

import { createContext, useEffect, useState, useContext } from "react";
import { LogUser, AuthContextProps } from "./types";

const AuthContext = createContext({} as AuthContextProps);

export function setUserLocalStorage(user: LogUser) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user: LogUser = JSON.parse(json);
  return user ?? null;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const socket = io("http://localhost:5000");

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as LogUser);

  useEffect(() => {
    const data = getUserLocalStorage();
    if (data) {
      setUser(data);
      socket.emit("JoinRoom", data);
      socket.emit("AskVideoInfo");
    }
  }, []);

  const authenticate = async (data: LogUser) => {
    setUser(data);
    setUserLocalStorage(data);
    // socket.on("connect", () => {
    socket.emit("JoinRoom", data);
    socket.emit("AskVideoInfo");
    // });
  };

  const logout = async () => {
    setUser({} as LogUser);
    setUserLocalStorage({} as LogUser);
  };

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };

export default function useAuth() {
  return useContext(AuthContext);
}

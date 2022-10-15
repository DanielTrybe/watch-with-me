import React, { createContext, useEffect, useState } from "react";
import { CardsContextProps, Users, Messages, LogUser } from "./types";
export const CardsContext = createContext({} as CardsContextProps);

// receber mensagens e enviar

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMEssages] = useState([] as Messages[]);
  const [users, setUsers] = useState([] as Users[]);
  const [searchVideo, setSearchVideo] = useState("LzBawioIFQI");
  const [loading, setLoading] = useState(false);
  const [loginUser, setloginUser] = useState({} as LogUser);

  const getNewVideo = async () => {
    // busca novo video
  };

  const sendMessage = async () => {
    // nanda nova mensagem
  };

  const values = {
    searchVideo,
    setSearchVideo,
    users,
    messages,
    loading,
    sendMessage,
    loginUser,
    setloginUser,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;

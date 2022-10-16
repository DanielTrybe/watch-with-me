import io from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";
import { Messages, CardsContextProps } from "./types";
import useAuth from "./AuthContext";

export const CardsContext = createContext({} as CardsContextProps);

const socketContext = io("/");

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  const [messages, setMessages] = useState([] as Messages[]);

  const getNewVideo = (url: string) => {
    socketContext.emit("NewVideo", url);
  };

  const sendMessage = (message: string) => {
    socketContext.emit("SendMessage", {
      userName: user.userName,
      avatar: user.avatar,
      message,
    });
    // nanda nova mensagem
  };

  useEffect(() => {
    socketContext.on("ReceivedMessage", (data: Messages) => {
      setMessages((previous: Messages[]) => [...previous, data]);
      setTimeout(() => {
        const scroll = document.getElementById("chat") as any;
        scroll.scrollTo(0, scroll.scrollHeight);
      }, 500);
    });
  }, []);

  const values = {
    messages,
    sendMessage,
    getNewVideo,
    socketContext,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;

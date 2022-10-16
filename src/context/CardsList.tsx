import io from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";
import { Messages } from "./types";
import useAuth from "./AuthContext";

export const CardsContext = createContext({} as any);
// receber mensagens e enviar

const socketContext = io("http://localhost:5000");

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  const [messages, setMessages] = useState([] as Messages[]);
  const sendNewVideo = (url: string) => {
    // socket.emit("NewVideo", url);
  };
  //https://www.youtube.com/watch?v=W9aXIZ36J1I
  const getNewVideo = (url: string) => {
    socketContext.emit("NewVideo", url);

    // setFindVideoByURL(id);
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
    socketContext.on("ReceivedMessage", (data: any) => {
      setMessages((previous: any) => [...previous, data]);
      setTimeout(() => {
        const scroll = document.getElementById("chat") as any;
        scroll.scrollTo(0, scroll.scrollHeight);
      }, 500);
    });
  }, []);

  const values = {
    messages,
    sendMessage,
    setMessages,
    sendNewVideo,

    getNewVideo,
    socketContext,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
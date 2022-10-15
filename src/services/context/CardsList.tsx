import React, { createContext, useEffect, useState } from "react";
import { CardsContextProps, Users, Messages, LogUser } from "./types";
export const CardsContext = createContext({} as CardsContextProps);
// receber mensagens e enviar

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMEssages] = useState([] as Messages[]);
  const [users, setUsers] = useState([] as Users[]);
  const [searchVideo, setSearchVideo] = useState({} as any);
  const [findVideoByURL, setFindVideoByURL] = useState("LzBawioIFQI" as string);
  const [loading, setLoading] = useState(false);
  const [loginUser, setloginUser] = useState({} as LogUser);
  console.log(messages);
  const sendNewVideo = (url: string) => {
    // socket.emit("NewVideo", url);
  };

  const getNewVideo = (url: string) => {
    sendNewVideo(url);
    const id = url.split("=")[1];
    setFindVideoByURL(id);
  };

  const convetStringURL = (url: string) => {
    return url.split("=")[1];
  };

  const sendMessage = (message: string) => {
    // socket.emit("SendMessage", {
    //   userName: loginUser.userName,
    //   room: loginUser.room,
    //   message,
    // });
    // nanda nova mensagem
  };

  const socketMethots = (socket: any) => {
    socket.on("connect", () => {
      socket.emit("JoinRoom", {
        room: loginUser.room,
        userName: loginUser.userName,
        avatar: loginUser.avatar,
      });

      socket.emit("AskVideo");
    });
    // pede o video
    socket.on("AskVideo", () => {
      const info = {
        url: searchVideo.getVideoUrl(),
        currentTime: searchVideo.getCurrentTime(),
      };
      socket.emit("VideoSync", info);
    });

    // sincroniza quando alguem entra
    socket.on("VideoSync", (data: any) => {
      searchVideo.loadVideoById({
        videoId: convetStringURL(data.url),
        startSeconds: data.currentTime,
      });
    });

    // escuta quando alguem manda um video novo
    socket.on("NewVideo", (videoUrl: any) => {
      searchVideo.loadVideoById({
        videoId: convetStringURL(videoUrl),
      });
    });

    socket.on("NewMessage", (data: any) => {
      setMEssages([...messages, data]);
    });
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

    sendNewVideo,
    findVideoByURL,
    getNewVideo,
    socketMethots,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;

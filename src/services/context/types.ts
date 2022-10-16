export type Users = {
  name: string;
};

export type Messages = {
  avatar: string;
  userName: string;
  message: string;
};

export type LogUser = {
  avatar: string;
  userName: string;
};

export interface CardsContextProps {
  users: Users[];
  messages: Messages[];
  searchVideo: string;
  setSearchVideo: (data: any) => void;
  loading: boolean;
  sendMessage: (message: string) => void;
  loginUser: LogUser;
  setloginUser: (data: LogUser) => void;
  // socket: any;
  sendNewVideo: (url: string) => void;
  findVideoByURL: string;
  getNewVideo: (url: string) => void;
  socketMethots: (socket: any) => void;
}

export interface AuthContextProps {
  authenticate: (data: LogUser) => void;
  logout: () => void;
  user: LogUser;
}

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
  messages: Messages[];
  sendMessage: (message: string) => void;
  getNewVideo: (url: string) => void;
  socketContext: any;
}

export interface AuthContextProps {
  authenticate: (data: LogUser) => void;
  logout: () => void;
  user: LogUser;
}

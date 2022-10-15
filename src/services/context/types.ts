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
  room: string;
};

export interface CardsContextProps {
  users: Users[];
  messages: Messages[];
  searchVideo: string;
  setSearchVideo: (value: string) => void;
  loading: boolean;
  sendMessage: (message: string) => void;
  loginUser: LogUser;
  setloginUser: (data: LogUser) => void;
}

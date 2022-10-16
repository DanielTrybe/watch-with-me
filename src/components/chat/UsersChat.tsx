import { Messages } from "services/context/types";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import SendMessageField from "./MessageField";

type ChatProps = {
  users: Messages[];
  sendMessage: (message: string) => void;
};

function UsersChat({ users, sendMessage }: ChatProps) {
  return (
    <Grid
      sx={{ width: 370, maxHeight: 700, minHeight: 700, overflowY: "scroll" }}
    >
      <Typography variant="h4">Mensages</Typography>
      <Box>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {users.map((userMessage, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={userMessage.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={userMessage.userName}
                  secondary={userMessage.message}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </Box>
      <SendMessageField sendMessage={sendMessage} />
    </Grid>
  );
}

export default UsersChat;

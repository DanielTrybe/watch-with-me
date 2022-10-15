import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";
import { useCardsContext } from "hooks";

import { useStyles } from "./style";
import { Messages } from "services/context/types";
import UsersChat from "components/chat/UsersChat";

const primaryOpts = {
  height: "700",
  width: "1000",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const teste: Messages[] = [
  {
    avatar:
      "http://pm1.narvii.com/6509/2f42c67dd3cca71f69dd4788a0e7b76c337aa6f7_00.jpg",
    userName: "daniel",
    message: "faebuifeagufueahfea",
  },
  {
    avatar:
      "https://img1.ak.crunchyroll.com/i/spire4/8351984b9ef0f2ae0840434854e6d8151248552879_large.png",
    userName: "pedro",
    message: "18181851851",
  },
  {
    avatar: "https://images6.alphacoders.com/104/1040238.png",
    userName: "maria",
    message: "374r8234rf834q8",
  },
  { avatar: "algo", userName: "fulano", message: "bgdfbdt" },
  { avatar: "algo", userName: "ciclano", message: "1478rf4383445r1fv1csac" },
];

function VideoTemplate() {
  const classes = useStyles;
  const { searchVideo, messages, loading, users, sendMessage } =
    useCardsContext();
  const [videoName, setVideoName] = useState("" as string);
  const [opts, setOpts] = useState(primaryOpts);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    setVideoName(event.target.getVideoData().title);
    event.target.playVideo();
  };

  useEffect(() => {
    window.onresize = () => {
      const height = window.screen.height < 750 ? "400" : "700";
      const width = window.screen.width > 400 ? "1000" : "340";
      setOpts({ ...opts, width, height });
    };
  }, []);

  return (
    <>
      <Typography variant="h5" sx={classes.title}>
        Assistindo: {videoName}
      </Typography>
      <Grid sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Box minWidth="70%">
          <YouTube videoId={searchVideo} opts={opts} onReady={onPlayerReady} />
        </Box>
        <Box minWidth="25%">
          <UsersChat users={teste} sendMessage={sendMessage} />
        </Box>
      </Grid>
    </>
  );
}

export default VideoTemplate;

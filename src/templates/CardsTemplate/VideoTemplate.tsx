import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";
import { useCardsContext, useVideoStateChange } from "hooks";

import { useStyles } from "./style";
import { Messages } from "services/context/types";
import UsersChat from "components/chat/UsersChat";

const primaryOpts = {
  height: "700",
  width: "1000",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

function VideoTemplate() {
  const classes = useStyles;
  const {
    socketContext,

    messages,
    setMessages,

    sendMessage,
    findVideoByURL,
    loginUser,
  } = useCardsContext();
  const { videoState } = useVideoStateChange();
  const [videoName, setVideoName] = useState("" as string);
  const [opts, setOpts] = useState(primaryOpts);

  const syncTime = (currentTime: any, player: any) => {
    if (
      player.getCurrentTime() < currentTime - 0.5 ||
      player.getCurrentTime() > currentTime + 0.5
    ) {
      player.seekTo(currentTime);
      player.playVideo();
    }
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    socketContext.on("Play", () => {
      console.log("dar plkay");
      event.target.playVideo();
    });

    socketContext.on("Pause", () => {
      console.log("dar pause");
      event.target.pauseVideo();
    });

    socketContext.on("SyncTime", (data: any) => {
      console.log("SINCRONIZANDO");
      syncTime(data, event.target);
    });

    setVideoName(event.target.getVideoData().title);
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
          <YouTube
            videoId={findVideoByURL}
            opts={opts}
            onReady={onPlayerReady}
            onStateChange={(e) => videoState(e.target, socketContext)}
          />
        </Box>

        <Box minWidth="25%">
          <UsersChat users={messages} sendMessage={sendMessage} />
        </Box>
      </Grid>
    </>
  );
}

export default VideoTemplate;

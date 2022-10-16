/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";
import { useCardsContext, useVideoStateChange } from "hooks";
import { useStyles } from "./style";
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
  const { socketContext, messages, sendMessage } = useCardsContext();
  const { videoState } = useVideoStateChange();
  const [videoName, setVideoName] = useState("" as string);
  const [opts, setOpts] = useState(primaryOpts);

  const getYoutubeIdByUrl = (url: any) => {
    let ID = "";

    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  };

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
      event.target.playVideo();
    });

    socketContext.on("Pause", () => {
      event.target.pauseVideo();
    });

    socketContext.on("SyncTime", (data: any) => {
      syncTime(data, event.target);
    });

    socketContext.on("NewVideo", (videoUrl: any) => {
      event.target.loadVideoById({
        videoId: getYoutubeIdByUrl(videoUrl),
      });
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
            videoId="LzBawioIFQI"
            opts={opts}
            onReady={onPlayerReady}
            onStateChange={(e) =>
              videoState(e.target, socketContext, setVideoName)
            }
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

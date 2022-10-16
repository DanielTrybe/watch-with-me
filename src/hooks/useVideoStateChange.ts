function useVideoStateChange() {
  const videoState = (
    player: any,
    socket: any,
    setVideoName: (title: string) => void
  ) => {
    setVideoName(player.getVideoData().title);

    switch (player.getPlayerState()) {
      case -1:
        socket.emit("Play");
        break;
      case 0:
        break;
      case 1:
        // socket.emit("VideoSync", {
        //   currentTime: player.getCurrentTime(),
        //   url: player.getVideoUrl(),
        // });

        socket.emit("Play");
        break;
      case 2:
        socket.emit("Pause");
        break;
      case 3:
        socket.emit("SyncTime", player.getCurrentTime());
        break;
      case 5:
        break;
      default:
        break;
    }
  };
  return { videoState };
}
export default useVideoStateChange;

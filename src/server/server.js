const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    method: ["*"],
  },
});
require("dotenv").config();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/../../build"));

io.on("connection", function (socket) {
  //in = send all
  //to = send all except sender

  socket.on("JoinRoom", (data) => {
    socket.userName = data.userName;
    socket.avatar = data.avatar;
    const message = socket.userName + " joined the room.";
    io.emit("ReceivedMessage", {
      userName: "Server Notification",
      avatar: data.avatar,
      message,
    });

    // io.emit("AskUser");
    console.log(data);
  });

  socket.on("SendMessage", (data) => {
    io.emit("ReceivedMessage", data);
  });

  socket.on("Play", () => {
    io.emit("Play");
  });

  socket.on("Pause", () => {
    io.emit("Pause");
  });

  socket.on("SyncTime", (data) => {
    io.emit("SyncTime", data);
  });

  socket.on("NewVideo", (url) => {
    io.emit("NewVideo", url);
  });
});

http.listen(PORT, function () {
  console.log("listening on *:" + PORT);
});

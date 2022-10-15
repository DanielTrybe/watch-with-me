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

// app.use(express.static(__dirname + "/../../build"));

const video = "";

io.on("connection", function (socket) {
  //in = send all
  //to = send all except sender

  socket.on("JoinRoom", (data) => {
    socket.join(data.room);
    socket.room = data.room;
    socket.userName = data.userName;
    socket.avatar = data.avatar;

    const message = socket.userName + " joined the room.";
    io.in(socket.room).emit("NewMessage", {
      userName: "Server Notification",
      avatar: data.avatar,
      message,
    });

    io.in(socket.room).emit("AskUser");
  });

  socket.on("AskVideo", () => {
    socket.to(socket.room).emit("AskVideo");
  });

  socket.on("Play", () => {
    socket.to(socket.room).emit("Play");
  });

  socket.on("Pause", () => {
    socket.to(socket.room).emit("Pause");
  });

  socket.on("VideoSync", (currentTime) => {
    socket.to(socket.room).emit("VideoSync", currentTime);
  });

  socket.on("NewVideo", (videoURL) => {
    io.to(socket.room).emit("NewVideo", videoURL);
  });

  socket.on("SendMessage", (data) => {
    console.log("recebi");
    io.in(socket.room).emit("NewMessage", data);
  });

  socket.on("SendUser", (username) => {
    io.in(socket.room).emit("SendUser", username);
  });
});

http.listen(PORT, function () {
  console.log("listening on *:" + PORT);
});

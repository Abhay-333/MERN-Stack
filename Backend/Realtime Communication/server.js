const app = require("./src/app");
const {createServer} = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app); // express server thik se communicate nahi kr pata socketio se toh issi liye humne app ko wrap kr diya httpServer se
const io = new Server(httpServer); // aur aage httpServer ko bhi wrap kr diya socket io se, this is because socketio kuch protocols use krta hai jo express ko samaj nahi ate

io.on("connection", (socket) => { //when a new user connects to server via socket.io
  console.log(`User Connected`);
});

httpServer.listen(3000, () => {
  console.log(`Server is running on 3000`);
});

// io = server
// socket = single user
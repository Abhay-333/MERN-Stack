const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.end("users");
  }
  res.end("Server Created");
});

server.listen(3000, () => {
  console.log("Server is running on 3000");
});

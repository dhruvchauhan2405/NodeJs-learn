const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the Home");
  } else if (req.url == "/about") {
    res.end("hello from the about sides");
  } else if (req.url == "/contact") {
    res.end("hello from the Contact sides");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Error page. Page does not exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});

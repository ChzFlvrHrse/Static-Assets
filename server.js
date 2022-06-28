const http = require('http');
const fs = require("fs");

const responseBody = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/static/css/application.css" rel="stylesheet" />
  <title>Example</title>
</head>

<body>
  <h1>Hello World!</h1>
  <img src="/static/images/dog.jpg" />
</body>

</html>`;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(responseBody);
  }

  if (req.method === "GET" && req.url === "/static/images/dog.jpg") {
    const dogImage = fs.readFileSync("./assets/images/dog.jpg");

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpeg");
    res.end(dogImage);
  }

  if (req.method === "GET" && req.url === "/static/css/application.css") {
    const css = fs.readFileSync("./assets/css/application.css");

    res.statusCode = 200;
    res.setHeader("content-type", "text/css");
    res.end(css);
  }

  // if (req.method === "GET" && res) {
  //   res.statusCode = 404;
  //   res.setHeader("content-type", "text/plain");
  //   res.end("No matching route handler found for this endpoint");
  // }
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));

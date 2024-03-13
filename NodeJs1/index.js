const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  const contenType = "text/html";
  const ext = path.extname(filePath);
  if (!ext) {
    filePath += ".html";
  }

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default:
      contentType = "text/html";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error!!!");
        } else {
          res.writeHead(500, {
            "Content-Type": contentType,
          });

          res.end(data);
        }
      });
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server start port ${PORT}`);
});

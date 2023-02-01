// This is not server

// const http = require("http");
// const port = 3000;
// const hostname = "127.0.0.1"; ${hostname}

// const server = http.createServer((req, res) => res.end("dahflhdaulFHLwehguwehgiuhughgu;he;o;hweg;uowhE;GH"));

// server.listen(port, () => console.log(`Kill me  ${port}`));

// express

const express = require("express");
const { nextTick } = require("process");
const path = require("path");
// console.log("dirname", path.dirname(__filename));
// console.log("filename", path.basename(__filename));

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("<p>da?provoda</p>"));
// http://localhost:3000/index.html

// styles

app.use(express.static("public"));

app.listen(port, () => console.log(`localhost: ${port} start`));

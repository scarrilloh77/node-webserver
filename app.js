const express = require("express");
const app = express();
const port = 8080;

// Servir contenido estático (TIENE PRIORIDAD!)
app.use(express.static("public"));

// Ya no se va a ejecutar:

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// ------------------------

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

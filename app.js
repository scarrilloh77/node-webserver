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

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta!");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

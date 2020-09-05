const express = require("express");
const card = require("./card");
const app = express();

app.get("/", (req, res) => {
  card(req.query, res);
});

app.listen(3000, () => console.log("Server started!!!"));

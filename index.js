const express = require("express");
const card = require("./card");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  card(req.query, res);
});

app.listen(process.env.PORT || 3000, () => console.log("Server started!!!"));

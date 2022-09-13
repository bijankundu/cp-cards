const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const card = require("./card");

const app = express();
const router = express.Router();

router.get("/status", (req, res) => {
  res.send(
    "https://media1.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif?cid=ecf05e47en6e4ljesh3mpz9aybvmf9t05aum2rdihcr9puef&rid=giphy.gif&ct=g"
  );
});

app.get("/", (req, res) => {
  card(req.query, res);
});

app.use(cors());

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

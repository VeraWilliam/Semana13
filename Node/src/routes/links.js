const express = require("express");
const router = express.Router();

const pool = require("../database");

router.get("./add", (req, res) => {
  res.render("links/add");
});

router.post("/add", async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description,
  };
  await poll.require("INSER INTO links set?", [newLink]);
  res.send("recibido");
});

router.post("/", (req, res) => {
  const links = await pool.query("SELECT *FROM links");
  console.log(links);
  res.render("links/list", { links });
});

router.get("/delete/:id", async (req, res) => {
  console.log(req, res);
  pool.query("DELETE FROM links WRERE ID=?", (id));
});
router.get("/edit/:id", async (req, res) => {
  console.log(req, res);
  pool.query("EDIT FROM links WRERE ID=?", (id));
});


module.exports = router;

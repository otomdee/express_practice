const db = require("../db");

async function getAuthorById(req, res) {
  const { username } = req.params;

  const author = await db.getAuthorById(Number(username));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
};

module.exports = { getAuthorById };
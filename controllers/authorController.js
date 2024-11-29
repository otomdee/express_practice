const db = require("../db");
const CustomNotFound = require("../errors/CustomNotFound");

async function getAuthorById(req, res) {
  const { username } = req.params;

  const author = await db.getAuthorById(Number(username));

  if (!author) {
    throw new CustomNotFound("Author Not Found");
    //error can then be caught by error middleware function in app.js
  }

  res.send(`Author Name: ${author.name}`);
};

module.exports = { getAuthorById };
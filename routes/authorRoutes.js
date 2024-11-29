const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get('/', (req, res) => {
    res.send("All authors page");
})

authorRouter.get('/:username', getAuthorById)

module.exports = authorRouter;
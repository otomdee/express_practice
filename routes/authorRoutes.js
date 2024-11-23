const { Router } = require("express");

const authorRouter = Router();

authorRouter.get('/', (req, res) => {
    res.send("All authors page");
})

authorRouter.get('/:username', (req, res) => {
    const { username } = req.params;
    res.send(`this is ${username}'s page`);
})

module.exports = authorRouter;
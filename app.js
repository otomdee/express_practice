const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRoutes.js");
const indexRouter = require("./routes/indexRoutes.js");

app.use("/", indexRouter);
app.use("/authorRoutes", authorRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRoutes.js");
const indexRouter = require("./routes/indexRoutes.js");
const path = require("node:path");

app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
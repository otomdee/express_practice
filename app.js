const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRoutes.js");
const indexRouter = require("./routes/indexRoutes.js");
const aboutRouter = require("./routes/aboutRoutes.js");
const path = require("node:path");

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/about", aboutRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
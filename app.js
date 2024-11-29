const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRoutes.js");
const indexRouter = require("./routes/indexRoutes.js");

app.use("/", indexRouter);
app.use("/authors", authorRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
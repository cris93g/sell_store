const express = require("express");
const cors = require("cors");
const massive = require("massive");
const { json } = require("body-parser");

const app = express();
const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`f yea we listening on port ${port}`);
});

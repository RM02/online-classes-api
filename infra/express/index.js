const express = require("express");
const cors = require("cors");

const app = express()
const router = require("./router");

app.use(cors());
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => console.log(`Running on port ${process.env.PORT}`))

module.exports = app;

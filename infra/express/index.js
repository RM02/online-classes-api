const express = require("express");
const cors = require("cors");

const app = express()
const router = require("./router");
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))

module.exports = app;

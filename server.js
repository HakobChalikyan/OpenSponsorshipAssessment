const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)

app.use("/", require("./routes/athleteRoute"));

app.listen(3001, function() {
    console.log("Express running on 3001");
})
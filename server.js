const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://HakobChalikyan:MongoPass@cluster0.pnd3gps.mongodb.net/AthletesDB")

app.use("/", require("./routes/athleteRoute"));

app.listen(3001, function() {
    console.log("Express running on 3001");
})
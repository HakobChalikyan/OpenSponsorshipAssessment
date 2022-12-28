const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// const uri = process.env.MONGODB_URI;
// mongoose.connect(uri)

mongoose.connect("mongodb+srv://HakobChalikyan:MongoPass@cluster0.pnd3gps.mongodb.net/AthletesDB")

app.use("/", require("./routes/athleteRoute"));

// app.listen(3001, function() {
//     console.log("Express running on 3001");
// })

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
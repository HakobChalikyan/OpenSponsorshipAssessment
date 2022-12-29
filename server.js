const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// const uri = process.env.MONGODB_URI;
// mongoose.connect(uri)
mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

//mongoose.connect("mongodb+srv://HakobChalikyan:MongoPass@cluster0.pnd3gps.mongodb.net/AthletesDB")

app.use("/", require("./routes/athleteRoute"));

//app.listen(process.env.SERVER_PORT || 3001);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.listen(3001, function() {
//     console.log("Express running on 3001");
// })

const mongoose = require("mongoose");

const athleteSchema = {
    name: String,
    sport: String,
    DOB: String,
    gender: String,
    location: String,
    team: String,
    bio: String
}

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = Athlete;
const express = require("express");
const router = express.Router();
const Athlete = require("../models/athleteModel");

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const sport = req.body.sport;
    const DOB = req.body.DOB;
    const gender = req.body.gender;
    const location = req.body.location;
    const team = req.body.team;
    const bio = req.body.bio;
    const picture = req.body.picture;
    const newAthlete = new Athlete({
        name,
        sport,
        DOB,
        gender,
        location,
        team,
        bio
    });

    newAthlete.save();
});

router.route("/list").get((req, res) => {
    Athlete.find().then(foundAthletes => res.json(foundAthletes));
})

module.exports = router;
import React, { useEffect, useState } from "react";

function AthleteList() {
    const [athletes, setAthletes] = useState([{
        name: '',
        sport: '',
        DOB: '',
        location: '',
        gender: '',
        team:'',
        bio: ''
    }])

    const [showPopup, setShowPopup] = useState(false);
    const [selectedAthlete, setSelectedAthlete] = useState(null);
    const togglePopup = (athlete) => {
        setSelectedAthlete(athlete);
        setShowPopup(!showPopup);
      };

    useEffect(() => {
        fetch("/list").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setAthletes(jsonRes));
    })

    return <div className='container'>
        <h1>Athletes</h1>
        {showPopup && (
        <div className="popup">
            <h1>{selectedAthlete.name}</h1>
            <p>Bio: {selectedAthlete.bio}</p>
            <p>Sport: {selectedAthlete.sport}</p>
            <p>Team: {selectedAthlete.team}</p>
            <p>Date of Birth: {selectedAthlete.DOB}</p>
            <p>Gender: {selectedAthlete.gender}</p>
            <p>Location: {selectedAthlete.location}</p>
            
          <button onClick={togglePopup}>Close</button>
        </div>
        )}
        {athletes.map(athlete =>
        <div class="athlete-item" onClick={() => togglePopup(athlete)}>
            <h1 class="athlete-name">{athlete.name}</h1>
                <p>{athlete.sport}</p>
                <p>{athlete.team}</p>
            </div>
            )}
    </div>
}

export default AthleteList
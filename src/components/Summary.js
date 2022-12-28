import React, { Component } from "react";
import axios from "axios";

export class Summary extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const newAthlete = {
            name: this.props.values.name,
            sport: this.props.values.sport,
            DOB: this.props.values.DOB,
            gender: this.props.values.gender,
            location: this.props.values.location,
            team: this.props.values.team,
            bio: this.props.values.bio
        }
        axios.post('http://localhost:3001/create', newAthlete);
        this.props.nextScreen();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevScreen();
    }

    render() {
        const { values: {name, sport, DOB, gender, location, team, bio} } = this.props;
        return (
            <div>
                <h1>Summary</h1>

                <p>Name: {name}</p>
                <p>Sport: {sport}</p>
                <p>Date of Birth: {DOB}</p>
                <p>Gender: {gender}</p>
                <p>Location: {location}</p>
                <p>Team: {team}</p>
                <p>Bio: {bio}</p>

                <button label="Next"
                    style={styles.button}
                    onClick={this.previous}>
                    Back
                </button>
                <button label="Next"
                    style={styles.button}
                    onClick={this.handleSubmit}>
                    Confirm
                </button>
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Summary
import React, { Component } from "react";

export class About extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextScreen();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevScreen();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <h1>More Info</h1>
                <input
                    type="text"
                    placeholder="Location"
                    className="form-control"
                    id="location"
                    onChange={handleChange('location')}
                    defaultValue={values.location}
                    style={styles.input}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Team"
                    className="form-control"
                    id="team"
                    onChange={handleChange('team')}
                    defaultValue={values.team}
                    style={styles.input}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Bio"
                    className="form-control"
                    id="bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                    style={styles.input}
                />
                <br/>
                <button label="Next"
                    style={styles.button}
                    onClick={this.previous}>
                    Back
                </button>
                <button label="Next"
                    style={styles.button}
                    onClick={this.continue}>
                    Next
                </button>
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    input: {
        margin: 5
    }
}

export default About
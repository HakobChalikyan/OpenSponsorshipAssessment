import React, { Component } from "react";

export class BasicInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextScreen();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <h1>Personal Info</h1>
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    id="name"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    style={styles.input}
                />
                <br/>
                <input
                    type="date"
                    placeholder="Date of Birth"
                    className="form-control"
                    id="DOB"
                    onChange={handleChange('DOB')}
                    defaultValue={values.DOB}
                    style={styles.input}
                />
                <br/>
                <select
                    id="gender"
                    onChange={handleChange("gender")}
                    defaultValue={values.gender}
                    style={styles.input}>
                    <option value="" disabled selected>Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <select
                    id="sport"
                    onChange={handleChange("sport")}
                    defaultValue={values.sport}
                    style={styles.input}>
                    <option value="" disabled selected>Sport</option>
                    <option value="Tennis">Golf</option> 
                    <option value="Tennis">Tennis</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Baseball">Baseball</option>
                    <option value="American Football">American Football</option>
                    <option value="Aquatics">Aquatics</option>
                    <option value="Archery">Archery</option>
                    <option value="Automobile Racing">Automobile Racing</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Beach Volleyball">Beach Volleyball</option>
                    <option value="Bobsleigh">Bobsleigh</option>
                    <option value="Body Building">Body Building</option>
                    <option value="Boxing">Boxing</option>
                    <option value="Cross Country Running">Cross Country Running</option>
                    <option value="Cross Country Skiing">Cross Country Skiing</option>
                    <option value="Curling">Curling</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Darts">Darts</option>
                    <option value="Decathlon">Decathlon</option>
                    <option value="Down Hill Skiing">Down Hill Skiing</option>
                    <option value="Equestrianism">Equestrianism</option>
                    <option value="eSports">eSports</option>
                    <option value="Fencing">Fencing</option>
                    <option value="Field Hockey">Field Hockey</option>
                    <option value="Figure Skating">Figure Skating</option>
                    <option value="Gymnastics">Gymnastics</option>
                    <option value="Ice Hockey">Ice Hockey</option>
                    <option value="Martial Arts">Martial Arts</option>
                    <option value="Mixed Martial Arts">Mixed Martial Arts</option>
                    <option value="Modern Pentathlon">Modern Pentathlon</option>
                    <option value="Motorcycle Racing">Motorcycle Racing</option>
                    <option value="Netball">Netball</option>
                    <option value="Polo">Polo</option>
                    <option value="Racquetball">Racquetball</option>
                    <option value="Rowing">Rowing</option>
                    <option value="Rugby">Rugby</option>
                    <option value="Sailing">Sailing</option>
                    <option value="Softball">Softball</option>
                    <option value="Shooting">Shooting</option>
                    <option value="Skeet Shooting">Skeet Shooting</option>
                    <option value="Skeleton">Skeleton</option>
                    <option value="Snow Boarding">Snow Boarding</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Squash">Squash</option>
                    <option value="Surfing">Surfing</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Track and Field">Track and Field</option>
                </select>
                <br />
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

export default BasicInfo
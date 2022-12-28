import React, { Component } from "react";
import BasicInfo from './BasicInfo';
import About from './About';
import Summary from "./Summary";
import AthleteList from "./AthleteList";

export class Form extends Component {
state = {
    step: 1,
    name: '',
    sport: '',
    DOB: '',
    gender: '',
    location: '',
    team: '',
    bio: ''
}

nextScreen = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

prevScreen = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

    render() {
        const { step, name, sport, DOB, gender, location, team, bio} = this.state;
        const values = { name, sport, DOB, gender, location, team, bio}
        
        switch(step) {
            case 1:
                return (
                    <BasicInfo 
                        nextScreen = {this.nextScreen}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return (
                    <About
                        nextScreen = {this.nextScreen}
                        prevScreen = {this.prevScreen}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 3:
                return (
                    <Summary
                        nextScreen = {this.nextScreen}
                        prevScreen = {this.prevScreen}
                        values = {values}
                    />
                );
            case 4:
                return (
                    <AthleteList
                        values = {values}
                    />
                );
        }
    }
}

export default Form
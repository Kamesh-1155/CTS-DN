import React, { Component } from "react";

class EventExamples extends Component {

    showMessage = () => {
        alert("Welcome to Cognizant!");
    };

    greetUser = (name) => {
        alert("Hello " + name);
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <h2>React Event Examples</h2>

                <button onClick={this.showMessage}>
                    Welcome
                </button>

                <br /><br />

                <button onClick={() => this.greetUser("Kamesh")}>
                    Greet User
                </button>
            </div>
        );
    }
}

export default EventExamples;
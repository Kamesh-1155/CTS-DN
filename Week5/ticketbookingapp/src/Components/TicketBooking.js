import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class TicketBooking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    login = () => {
        this.setState({ isLoggedIn: true });
    };

    logout = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "30px" }}>

                <h1>Ticket Booking App</h1>

                {
                    this.state.isLoggedIn
                        ? <User />
                        : <Guest />
                }

                <br />

                {
                    this.state.isLoggedIn
                        ? (
                            <button onClick={this.logout}>
                                Logout
                            </button>
                        )
                        : (
                            <button onClick={this.login}>
                                Login
                            </button>
                        )
                }

            </div>
        );
    }
}

export default TicketBooking;
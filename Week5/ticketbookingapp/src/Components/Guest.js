import React from "react";

function Guest() {
    return (
        <div>
            <h2>Welcome Guest</h2>
            <p>Please login to book your flight tickets.</p>

            <h3>Available Flights</h3>

            <ul>
                <li>Chennai → Delhi</li>
                <li>Bangalore → Mumbai</li>
                <li>Hyderabad → Kolkata</li>
            </ul>
        </div>
    );
}

export default Guest;
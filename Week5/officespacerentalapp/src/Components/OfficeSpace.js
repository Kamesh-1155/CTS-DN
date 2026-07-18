import React from "react";
import officeImage from "../Images/office.jpg";

function OfficeSpace() {

    const offices = [
        {
            name: "Tech Park A",
            rent: 45000,
            address: "Chennai"
        },
        {
            name: "Business Hub",
            rent: 65000,
            address: "Bangalore"
        },
        {
            name: "Corporate Plaza",
            rent: 55000,
            address: "Hyderabad"
        }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1>Office Space Rental</h1>

            <img
                src={officeImage}
                alt="Office"
                width="400"
            />

            <hr />

            {offices.map((office, index) => (
                <div key={index}>
                    <h3>{office.name}</h3>

                    <p>
                        <b>Address:</b> {office.address}
                    </p>

                    <p
                        style={{
                            color:
                                office.rent < 60000
                                    ? "red"
                                    : "green"
                        }}
                    >
                        <b>Rent:</b> ₹{office.rent}
                    </p>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default OfficeSpace;
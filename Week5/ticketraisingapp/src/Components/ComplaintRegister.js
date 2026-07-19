import React, { useState } from "react";

function ComplaintRegister() {

    const [employeeName, setEmployeeName] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint Registered Successfully!\n\nReference Number: ${referenceNumber}`
        );

        setEmployeeName("");
        setComplaint("");
    };

    return (
        <div style={{ width: "400px", margin: "40px auto" }}>
            <h2>Ticket Raising App</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Employee Name</label>
                    <br />
                    <input
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Complaint</label>
                    <br />
                    <textarea
                        rows="5"
                        cols="35"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        required
                    />
                </div>

                <br />

                <button type="submit">
                    Submit Complaint
                </button>

            </form>
        </div>
    );
}

export default ComplaintRegister;
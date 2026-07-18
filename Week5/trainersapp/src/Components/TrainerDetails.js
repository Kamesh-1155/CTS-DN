import React from "react";
import { useParams } from "react-router-dom";
import trainers from "../Data/TrainersMock";

function TrainerDetails() {

    const { id } = useParams();

    const trainer = trainers.find(
        (t) => t.id === parseInt(id)
    );

    if (!trainer) {
        return <h2>Trainer not found.</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Trainer Details</h2>

            <p><b>ID:</b> {trainer.id}</p>
            <p><b>Name:</b> {trainer.name}</p>
            <p><b>Email:</b> {trainer.email}</p>
            <p><b>Phone:</b> {trainer.phone}</p>
            <p><b>Technology:</b> {trainer.technology}</p>
            <p><b>Skills:</b> {trainer.skills}</p>
        </div>
    );
}

export default TrainerDetails;
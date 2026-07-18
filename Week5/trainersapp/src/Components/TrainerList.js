import React from "react";
import { Link } from "react-router-dom";
import trainers from "../Data/TrainersMock";

function TrainerList() {

    return (
        <div style={{ padding: "20px" }}>
            <h2>Trainer List</h2>

            <ul>
                {trainers.map((trainer) => (
                    <li key={trainer.id}>
                        <Link to={`/trainers/${trainer.id}`}>
                            {trainer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrainerList;
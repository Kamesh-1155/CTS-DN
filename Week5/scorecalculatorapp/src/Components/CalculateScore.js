import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.total / props.goal;

    return (
        <div className="score-box">
            <h2>Student Details</h2>

            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>School:</strong> {props.school}</p>
            <p><strong>Total Marks:</strong> {props.total}</p>
            <p><strong>Subjects:</strong> {props.goal}</p>
            <p><strong>Average:</strong> {average}</p>
        </div>
    );
}

export default CalculateScore;
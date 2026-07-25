import React from "react";

function ListofPlayers() {

    const players = [
        { id: 1, name: "Virat Kohli", score: 95 },
        { id: 2, name: "Rohit Sharma", score: 72 },
        { id: 3, name: "KL Rahul", score: 38 },
        { id: 4, name: "Shubman Gill", score: 105 },
        { id: 5, name: "Hardik Pandya", score: 60 },
        { id: 6, name: "Rishabh Pant", score: 21 },
        { id: 7, name: "Jasprit Bumrah", score: 12 },
        { id: 8, name: "Mohammed Siraj", score: 18 },
        { id: 9, name: "Ravindra Jadeja", score: 55 },
        { id: 10, name: "Suryakumar Yadav", score: 81 },
        { id: 11, name: "Axar Patel", score: 41 }
    ];

    const lowScorers = players.filter(player => player.score < 70);
    const highScorers = players.filter(player => player.score >= 70);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Players with score below 70</h2>

            <ul>
                {lowScorers.map(player => (
                    <li key={player.id}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <hr />

            <h2>Players with score 70 and above</h2>

            <ul>
                {highScorers.map(player => (
                    <li key={player.id}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
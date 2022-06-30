import React from "react";
import '../../index.css';


export default function PlayerWelcomePage() {
  return (
    <div className="btn-container">
      <h1>Players</h1>
      <button className="player1 btn">Player One</button>
      <button className="player2 btn"> Player Two</button>
      <button className="highScores btn"> View high-scores</button>
    </div>
  );
}

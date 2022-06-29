import React from 'react'
import { useNavigate } from "react-router-dom";

export const HighScoresButton = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

routeChange('/highscores');
  return (
    <button onClick={routeChange}>HighScores</button>
  )
}


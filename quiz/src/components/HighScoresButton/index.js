import React from 'react'
import { useNavigate } from "react-router-dom";
export const HighScoresButton = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  return (
    <button className="highScores btn" onClick={()=>routeChange('/highscores')}>HighScores</button>
  )
}


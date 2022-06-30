import React from 'react'
import { useNavigate } from "react-router-dom";
export const HighScoresButton = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  return (
    <button className='btn coolbutton' onClick={()=>routeChange('/highscores')}>HighScores</button>
  )
}


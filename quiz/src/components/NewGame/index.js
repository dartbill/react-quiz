import React from 'react'
import { useNavigate } from "react-router-dom";

export const NewGame = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

routeChange('/start');
  return (
    <button onClick={routeChange}>NewGame</button>
  )
}


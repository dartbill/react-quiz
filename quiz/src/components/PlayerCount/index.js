import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
export const PlayerCount = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  const dispatch = useDispatch();

  const updatePlayers = (p) => {
    p === 1
      ? dispatch({ type: 'SET_PLAYER_COUNT', payload: 1 })
      : dispatch({ type: 'SET_PLAYER_COUNT', payload: 2 });
    routeChange('/newgame');
  }

  return (
    <>

    <div>
        <h2>Select Player Count</h2>
        <button className='coolbutton' onClick={()=> updatePlayers(1)}>One</button>
        <button className='coolbutton' onClick={()=> updatePlayers(2)}>Two</button>
        {/* <button>High Scores</button> */}
    </div>
    </>
  )
}

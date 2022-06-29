import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../components'

export const StartPage = () => {

    let navigate = useNavigate();
    const routeChange = (path) => {
      navigate(path);
    }

    const data = useSelector((state) => state.playerCount);
    const dispatch = useDispatch(); 

    const updatePlayers = (p) => {
        p === 1 ? dispatch({ type: 'SET_PLAYER_COUNT', payload: 1 })
        : dispatch({ type: 'SET_PLAYER_COUNT', payload: 2 })
        console.log(data);
        // routeChange('/');
    }

  return (
    <>
    <Login/>
    <div className="container">
        <h1>Select Player Count</h1>
        <button onClick={()=> updatePlayers(1)}>One</button>
        <button onClick={()=> updatePlayers(2)}>Two</button>
        {/* <button>High Scores</button> */}
    </div>
    </>
  )
}


// p === 1 ? dispatch({ type: 'SET_PLAYER1', payload: })
// : dispatch({ type: 'SET_PLAYER2', payload: })
// routeChange('/');





import React from 'react'
import { PlayerCount } from '../../components/'
import { HighScoresButton } from '../../components/'

export const StartPage = () => {


  return (
    <>  
        <PlayerCount/>
        <HighScoresButton/>
    </>
  )
}


// p === 1 ? dispatch({ type: 'SET_PLAYER1', payload: })
// : dispatch({ type: 'SET_PLAYER2', payload: })
// routeChange('/');





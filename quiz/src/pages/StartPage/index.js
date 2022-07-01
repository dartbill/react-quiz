import React from 'react'
import { PlayerCount } from '../../components/'
import { HighScoresButton } from '../../components/'
import Logo from '../../components/Logo/Logo'

export const StartPage = () => {


  return (
    <div>  
        <Logo />
        <PlayerCount/>
        <HighScoresButton/>
    </div>
  )
}

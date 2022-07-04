import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import { PlayerCount } from '../../components/'
// import { HighScoresButton } from '../../components/'
import Logo from '../../components/Logo/Logo'
import { default as socket } from '../../actions/socket'
import HostRequestHandler from '../../components/HostRequestHandler';

export const StartPage = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  socket.off('connect').on('connect', () => { console.log('Connected with id' + socket.id) })

  socket.off('admin-message').on('admin-message', msg => console.log(msg));

  const [roomCode, setRoomCode] = useState('')
  const [hostOrGuest, setHostOrGuest] = useState('')
  const [playersConnected, setPlayersConnected] = useState(0)
  const [startGame, setStartGame] = useState(false)


  //Listen to how many users are in the room
  socket.off('responseJoinRoom').on('responseJoinRoom', (msg) => {
    setPlayersConnected(msg)
    console.log(msg)
  })

  function onCreateRoom() {
    socket.emit('message', 'Create room')
    socket.off('responseCreateRoom').on('responseCreateRoom', (msg) => {
      setRoomCode(msg)
      console.log(msg)
    })
    setPlayersConnected(1)
    setHostOrGuest('host')
  }





  function onFormSumbit(e) {
    e.preventDefault()
    let toJoin = e.target[0].value
    console.log(e.target[0].value)
    setRoomCode(toJoin)
    socket.emit('message', 'Join room', toJoin)
    setHostOrGuest('guest')
  }




  function onStartGame(e) {
    console.log(e.target.innerText)
    // IF STARTED ROOM
    // Get ranking questions from state and send it to server
    if (hostOrGuest === 'host') {
      // const getRankingQuestions = () => dispatch(fetchRankingQuestions());
      // getRankingQuestions()
      setStartGame(true)
      // Get questions from reducer
      // const question = returnQuestions()


    } else if (hostOrGuest === 'guest') {
      alert('Let the host start the game')
    } else {
      return
    }

  }


  //Socket on listen to message start game, if it is then redirect to /quiz
  //////////////////////////////////////////////////////////////////////////////////Model to follow to answer just once 
  socket.off('serverAuthToStartGame').on('serverAuthToStartGame', (msg) => {
    console.log(msg)
    routeChange('/newgame')
  })

  return (
    <div>
      <Logo />
      <div >
        <div >
          <div onClick={onCreateRoom}>
            Create Room
          </div>
          <p>
            Room Code: {roomCode}
          </p>
        </div>

        <br />

        <div >
          <div>
            Join Room
            <form className="roomForm" onSubmit={onFormSumbit}>
              <input type='text'></input>
              <button type='submit'>Enter</button>
            </form>
          </div>
        </div>
        <div >
          <button onClick={onStartGame}>Start Game</button>
        </div>
        <div >
          People in the room {playersConnected}
        </div>

        {startGame ? <HostRequestHandler room={roomCode} /> : ''}

      </div>
      {/* <PlayerCount /> */}
      {/* <HighScoresButton /> */}
    </div>
  );
};

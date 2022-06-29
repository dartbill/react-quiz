import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export const Answer = (props) => {

  // let [score, setScore] = useState(0)

  let [score1, setScore1] = useState(0)
  let [score2, setScore2] = useState(0)


  const dispatch = useDispatch();


  const updateScore = (e) => {
    e.preventDefault();
    if (props.turn) {
      setScore1(score1 = score1 + 1)
      dispatch({
        type: 'SET_PLAYER1',
        payload: {
          score: score1
        }
      })
      console.log("this is score1 " + score1)
    } else {
      setScore2(score2 = score2 + 1)
      dispatch({
        type: 'SET_PLAYER2',
        payload: {
          score: score2
        }
      })
    }
    console.log("this is score2 " + score2)
  }

  const handleBtnClick = () => {
    if (props.bool) {
      setScore1(score1 = score1 + 1)
    }
    console.log(score1)
  }

  return (
    <div className='answer'>
      <button onClick={updateScore} className="answer-letter">{props.num}</button>
      <div className="answer-text"> {props.answer} </div>
    </div>

  )
}



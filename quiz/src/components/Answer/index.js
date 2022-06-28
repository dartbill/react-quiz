import React, { useState } from 'react'

export const Answer = (props) => {

  let [score, setScore] = useState(0)


  const handleBtnClick = () => {
    if (props.bool) {
      setScore(score = score + 1)
    }
    console.log(score)
  }

  return (
    <div className='answer'>
      <button onClick={handleBtnClick} className="answer-letter">{props.num}</button>
      <div className="answer-text"> {props.answer} </div>
    </div>

  )
}

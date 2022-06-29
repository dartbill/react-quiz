import React, { useReducer, useState } from "react";

import { Question } from "../Question";
import '../.././index.css'

import { useNavigate } from "react-router-dom";

const initialState = {
  currentQuestionIndex: 0,
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

export const Quiz = () => {
  // eslint-disable-next-line
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const [turn, setTurn] = useState(true)


  const updateTurn = (e) => {
    e.preventDefault(e)
    if (turn) {
      setTurn(false)
    } else {
      setTurn(true)
    }
  }


  // // TOMS STUFF FOR BETTING///////////////////////////////////////////
  // const [orderA,setOrderA] = useState('0')
  // const [orderB,setOrderB] = useState('')
  // const [orderC,setOrderC] = useState('0')
  // const [orderD,setOrderD] = useState('0')

  // function createRandOrder (){
  //   const rand1= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
  //   setOrderA('bx'+rand1)
  //   const rand2= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
  //   setOrderB('bx'+rand2)
  //   const rand3= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
  //   setOrderC('bx'+rand3)
  //   const rand4= Math.floor(Math.random() * (4 - 0 + 1) + 0)   
  //   setOrderD('bx'+rand4)
  // }
  // //end of TOMS STUFF FOR BETTING///////////////////////////////////////////




  return (
    <div className="quiz">
      <div>

        {/* <div className='Container-Answers' onLoad={createRandOrder}>
        <div className='genBtn correctBtn bx3'  id={orderA}>1</div>
        <div className='genBtn wrongBtn bx4' id={orderB}>2</div>
        <div className='genBtn wrongBtn bx1' id={orderC}>3</div>
        <div className='genBtn wrongBtn bx2' id={orderD}>4</div>
      </div>

      <button onClick={ createRandOrder}>randomise </button> */}



        {/* <div className='genBtn correctBtn bx1' onClick={handleClickRight} id={orderA}>{dataQnA[counter]["a1"]}</div>
        <div className='genBtn wrongBtn bx2' onClick={handleClickWrong} id={orderB}>{dataQnA[counter]["a2"]}</div>
        <div className='genBtn wrongBtn bx3' onClick={handleClickWrong} id={orderC}>{dataQnA[counter]["a3"]}</div>
        <div className='genBtn wrongBtn bx4' onClick={handleClickWrong} id={orderD}>{dataQnA[counter]["a4"]}</div> */}

        <div className="score">{`Question ${state.currentQuestionIndex + 1}/10`}</div>
        <Question turn={turn} question={state.currentQuestionIndex} />
        <br />
        <div
          className="next-button"
          onClick={(e) => {
            { state.currentQuestionIndex < 19 ? dispatch({ type: "NEXT_QUESTION" }) : routeChange('/final') }
            updateTurn(e)

          }

          }
        >
          Next question
        </div>
      </div>
    </div>
  );
};



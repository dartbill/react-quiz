import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../Question";
import "../.././index.css";

export const Quiz = () => {
  // get Data from Store ********************************************

  // get Player Data
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);

  // get Player Count
  const playerCount = useSelector((state) => state.playerCount);

  // get current question index
  const currentQuestionIndex = useSelector(state => {
    return state.currentQuestionIndex
  })
    
  // eslint-disable-next-line
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  // setup local states *********************************************
  const [turn, setTurn] = useState(true);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const dispatch = useDispatch();

  // onClick Function for Answers ===================================
  const submitAnswer = (bool) => {
    // Updates Score if answer was correct
    if (bool) { updateScore()}
    
    // Set Max Number of Questions
    let maxQuestionIndex;
    playerCount === 2 ? (maxQuestionIndex = 19) : (maxQuestionIndex = 9);
    
    // Updates Question to Next Question OR ends game
    if (currentQuestionIndex < maxQuestionIndex) {
      dispatch({ type: "NEXT_QUESTION" })} 
    else {routeChange("/final")};

    // Update Turn, alternating between player 1 & 2 with boolean
    playerCount === 2 && updateTurn()
  };

  // updates player score in local state
  const updateScore = () => {
    // if player one turn...
    if (turn) {
        // update the local state
        setScore1((prevScore) => prevScore + 1);
        // update the store
        dispatch({
        type: "SET_PLAYER1",
        payload: {
          score: score1 + 1,
        },
      })
    }
    // if player two turn...
    else { 
        setScore2((prevScore) => prevScore + 1); 
        dispatch({
            type: "SET_PLAYER2",
            payload: {
              score: score2 + 1,
            },
          });
        };
  };

  // Toggles turn from true/false
  const updateTurn = () => (turn ? setTurn(false) : setTurn(true));

  // Update Question Number Text
  const updateQuestionIndex = () => {
        if (playerCount === 2) {
            return `Q:  ${Math.round((currentQuestionIndex + 1)/2)}/10`
        }
        if (playerCount === 1) {
            return `Q:  ${currentQuestionIndex + 1}/10`
        }
      }
/////////////////////////////////

    return (
        <div className="quiz">
            {turn ? (
                <p className='playerTurnTest'>{player1.username}, it's your turn!</p>
            ) : (
                <p className='playerTurnTest'>{player2.username}, it's your turn!</p>
            )}
            <div className="score" id='TitleTag'>
                <p id='TitleTagText'>{updateQuestionIndex()}</p>
            </div>

      <Question
        index={currentQuestionIndex}
        onSubmitQuestion={submitAnswer}
      />
    </div>
  );
}

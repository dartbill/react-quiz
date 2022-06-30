import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../Question";
import "../.././index.css";

export const Quiz = () => {
  // For debugging poiposes ***************************************
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const playerCount = useSelector((state) => state.playerCount);
  //   console.log("player1 :", player1)
  // console.log("player2 :", player2)
  // **************************************************************
  const currentQuestionIndex = useSelector(state => {
    console.log("state",state)
    return state.currentQuestionIndex
  })

  // eslint-disable-next-line
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const [turn, setTurn] = useState(true);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {console.log("score1 updated", score1)}, [score1])
  useEffect(() => { console.log("score2 updated", score2) }, [score2])
  const dispatch = useDispatch();

  // On Click Event for Answers ***********************************
  const submitAnswer = async (bool) => {
    console.log("in submit answer")
    // Updates Score if answer was correct
    if (bool) { await updateScore(); }
    
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

  // Update question text
  const updateQuestionIndex = () => {
    console.log("in update questions index")
    if (playerCount === 1) {
        return `Question ${currentQuestionIndex + 1}/10`
    }
    if (playerCount === 2) {
      if (turn) { return `Question ${currentQuestionIndex + 1}/10`}
      else { return `Question ${currentQuestionIndex}/10`}
    }
  }

  return (
    <div className="quiz">
      {turn ? (
        <p>{player1.username}, it's your turn!</p>
      ) : (
        <p>{player2.username}, it's your turn!</p>
      )}
      <div className="score">
        <p>{updateQuestionIndex()}</p>
      </div>

      <Question
        index={currentQuestionIndex}
        onSubmitQuestion={submitAnswer}
      />
    </div>
  );
};

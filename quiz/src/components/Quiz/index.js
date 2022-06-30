import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../Question";
import "../.././index.css";

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

    // For debugging poiposes ***************************************

    const player1 = useSelector((state) => state.player1);
    const player2 = useSelector((state) => state.player2);
    const playerCount = useSelector((state) => state.playerCount);
    console.log("player1 :", player1)
    console.log("player2 :", player2)

    // **************************************************************


    // eslint-disable-next-line 
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [turn, setTurn] = useState(true);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    // On Click Event for Answers ***********************************
    const submitAnswer = (bool) => {

        // Updates Score if answer was correct
        if (bool) { updateScore() }

        // Updates Question to Next Question OR ends game
        if (playerCount === 2) {
            state.currentQuestionIndex < 19
                ? dispatch({ type: "NEXT_QUESTION" })
                : routeChange("/final");
        }
        else {
            state.currentQuestionIndex < 9
                ? dispatch({ type: "NEXT_QUESTION" })
                : routeChange("/final");
        }

        // Update Turn, alternating between player 1 & 2 with boolean
        updateTurn();
    };

    const playerDispatch = useDispatch()

    const updateScore = () => {
        if (turn) {
            setScore1(score1 + 1);
            playerDispatch({
                type: "SET_PLAYER1",
                payload: {
                    score: score1,
                },
            });
        } else {
            setScore2(score2 + 1);
            playerDispatch({
                type: "SET_PLAYER2",
                payload: {
                    score: score2,
                },
            });
        }

    };

    const updateTurn = () => turn ? setTurn(false) : setTurn(true);

    return (
        <div className="quiz">
            <div className="score">
                {`Question ${state.currentQuestionIndex + 1}/10`}
            </div>
            <Question
                index={state.currentQuestionIndex}
                onSubmitQuestion={submitAnswer}
            />
        </div>
    );
};

import React, { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../Question";
import "../.././index.css";

// ******** Move to Question???!?
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
    // console.log("player1 :", player1)
    // console.log("player2 :", player2)

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

    useEffect(() => { console.log("score1 updated",score1)}, [score1])
    useEffect(() => { console.log("score2 updated",score2)}, [score2])
    const playerDispatch = useDispatch();

    const checkScore = () => {
        console.log("score1",score1)
        console.log("score2",score1)
    }
        // On Click Event for Answers ***********************************
    const submitAnswer = async (bool) => {
        // Updates Score if answer was correct
        if (bool) {await updateScore();}

        // Updates Question to Next Question OR ends game
        let maxQuestions;
        playerCount === 2 ? (maxQuestions = 19) : (maxQuestions = 9);

        if (state.currentQuestionIndex < maxQuestions){
                dispatch({ type: "NEXT_QUESTION" })
            } else {
                updatePlayers();
                routeChange("/final");
            }
        // Update Turn, alternating between player 1 & 2 with boolean
        playerCount === 2 && updateTurn()
        
    };

    // updates player score in local state
    const updateScore = async () => {
        if (turn) { await setScore1((prevScore) => prevScore + 1);}
        else { await setScore2((prevScore) => prevScore + 1);};
        checkScore();
        updatePlayers();
    };

    
    // updates player scores in store from local state
    const updatePlayers = () => {
        const players = ["SET_PLAYER1", "SET_PLAYER2"];
        const scores = [score1, score2];
        console.log("scores in updatePlayers:",scores)
        for (let player of players) {
            let index = players.indexOf(player);
            playerDispatch({
                type: player,
                payload: {
                    score: scores[index],
                },
            });
        }
    };

    // Toggles turn from true/false
    const updateTurn = () => (turn ? setTurn(false) : setTurn(true));

    const updateQuestionIndex = () => {
        if (playerCount === 2) {
            if (turn) {
                return `Question ${state.currentQuestionIndex + 1}/10`;
            } else {
                return `Question ${state.currentQuestionIndex}/10`;
            }
        } else return `Question ${state.currentQuestionIndex + 1}/10`;
    };

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
                index={state.currentQuestionIndex}
                onSubmitQuestion={submitAnswer}
            />
        </div>
    );
};

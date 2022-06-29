import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export const FinalScores = () => {

    // fetch or get final scores from the database
    const player1 = useSelector((state) => state.player1);
    const player2 = useSelector((state) => state.player2);

    useEffect(() => {
        const postScores = async () => {
            try {
                let opts = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                await axios.post(
                    "https://quizfutureproof.herokuapp.com/scoreboard/new",
                    player1,
                    opts
                );
            } catch (err) {
                console.warn(err);
            }
        };
        const postScores2 = async () => {
            try {
                let opts = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                await axios.post(
                    "https://quizfutureproof.herokuapp.com/scoreboard/new",
                    player2,
                    opts
                );
            } catch (err) {
                console.warn(err);
            }
        };
        postScores();
        postScores2();
    }, []);

    return (
        <div>
            <p>Here are your scores: </p>
            <ul>
                <li>
                    {player1.name} : {player1.score}
                </li>
                <li>
                    {player2.name} : {player2.score}
                </li>
            </ul>
            <p>{`Congratualtions ${
                player1.score > player2.score ? player1.username : player2.username
            }!`}</p>
        </div>
        //we also need a button that goes back
    );
};

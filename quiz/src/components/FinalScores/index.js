import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";



export const FinalScores = () => {
  // fetch or get final scores from the database
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const playerCount = useSelector((state) => state.playerCount);

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
  }, [player1, player2]);

  const whoWon = () => {
    if (player1.score > player2.score) {
      return ` 🎉 Congratulations ${player1.username} you are the winner! 🎉`;
    } else if (player2.score > player1.score) {
      return ` 🎉 Congratulations ${player1.username} you are the winner! 🎉`;
    } else {
      return "It was a tie!";
    }
  };

  return (
    <>
      <div className="hereAreYourScores-container"><p className="your-scores">Here are your scores: </p>
         <div className="center-user-scores">

          
      {playerCount === 1 ? (
        <ul>
          <li className="scores-styling">{`${player1.username} : ${player1.score}`}</li>
        </ul>
      ) : (
        <>
          <ul>
            <li className="p margin scores-styling">{`${player1.username} : ${player1.score}`}</li>
            <li className="p margin scores-styling">{`${player2.username} : ${player2.score}`}</li>
          </ul>
          <p className="who-won">{whoWon()}</p>
          
        </>
      )}
         </div>
    </div>
    </>
  );
};

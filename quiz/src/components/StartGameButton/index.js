import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const StartGameButton = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };

    const playerCount = useSelector((state) => state.playerCount);
    const player1 = useSelector((state) => state.player1);
    const player2 = useSelector((state) => state.player2);

    const startGame = () => {
        const path = "/quiz";
        switch (playerCount) {
            case 2:
                if (player1.username && player2.username) {
                    routeChange(path);
                } else {
                    window.alert("Please save a username for both players");
                }
                break;

            default:
                if (player1.username) {
                    // console.log(player1.username)
                    routeChange(path);
                } else {
                    window.alert("Please save a username");
                }
                break;
        }
    };

    return <button className="coolbutton" onClick={startGame}>Play!</button>;
};

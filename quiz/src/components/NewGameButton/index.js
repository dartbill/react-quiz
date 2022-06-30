import React from "react";
import { useNavigate } from "react-router-dom";

export const NewGameButton = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };

    return (
        <button className="ourBtns" onClick={()=>routeChange("/")}>
            NewGame
        </button>
    );
};

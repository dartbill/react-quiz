import React from "react";
import { useNavigate } from "react-router-dom";

export const NewGameButton = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };

    return (
        <button className="coolbutton " onClick={()=>routeChange("/")}>
            NewGame
        </button>
    );
};

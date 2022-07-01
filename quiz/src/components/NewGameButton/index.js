import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const NewGameButton = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const routeChange = (path) => {
        // reset store
        dispatch({type:"RESET"})
        // go someplace special
        navigate(path);
    };

    return (
        <button className="coolbutton " onClick={()=>routeChange("/")}>
            NewGame
        </button>
    );
};

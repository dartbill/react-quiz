import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const NewGameButton = () => {
    const currentState = useSelector(state => state);
    console.log("state :",currentState)
    
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

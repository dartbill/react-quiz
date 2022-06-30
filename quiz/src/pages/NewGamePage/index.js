import { GameProperties, UsernameEntry, StartGameButton } from "../../components";
import React from "react";

export const NewGamePage = () => {
    return (
        <div id="center-menu">
            <UsernameEntry />
             <div id="menu-startGame">
                <div id="gameMenu"><GameProperties /></div>
                <div id="playBtn"><StartGameButton /></div>
             </div>
            
        </div>
    );
};

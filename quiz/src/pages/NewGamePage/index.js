import { GameProperties, UsernameEntry,StartGameButton } from "../../components";
import React from "react";

export const NewGamePage = () => {
    return (
        <>
            <UsernameEntry />
            <GameProperties />
            <StartGameButton/>
        </>
    );
};

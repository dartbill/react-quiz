import React from "react";
import { Highscores, BackButton } from "../../components";

export const HighscorePage = () => {


    return (
        <>
            <div className="highScorePageFormat">
                <br></br>
                <br></br>
            <h2>High Scores</h2>
            <Highscores />
            <BackButton />
            </div>
        </>
    )
}





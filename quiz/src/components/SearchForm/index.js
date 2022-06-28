import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import './index.css'



export const SearchForm = () => {
    // GetQuestions({ cat: 20, level: "easy", type: "multiple" })
    const dispatch = useDispatch()
    const handleBtnClick = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        dispatch({ type: "SETCAT", payload: e.target.id })
    }

    const setDifficulty = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        dispatch({ type: "SETLEVEL", payload: e.target.id })
    }
    return (
        <>

            {/* Ending up with loads of classNames */}
            <div className="dropdown">
                <button className="dropbtn-diff">Difficult</button>
                <div className="dropdown-content-diff">
                    <a onClick={setDifficulty} className="drop-items-diff drop-items" id="easy" href="#">Piss easy </a>
                    <a onClick={setDifficulty} className="drop-items-diff drop-items" id="medium" href="#">medium</a>
                    <a onClick={setDifficulty} className="drop-items-diff drop-items" id="hard" href="#">Hard af</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn-cat">Category</button>
                <div className="dropdown-content-cat">
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="9" href="#">General knowledge</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="11" href="#">Films</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="15" href="#">Games</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="27" href="#">Animals</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="18" href="#">Computer Shit</a>
                </div>
            </div>

            {/* 
use the category num in the id=''

General knowledge= category=9
Book = category=10
Film 11
Music 12
Theatre 13
Tv 14
Game 15
Boardgames 16
Natural sci 17
Computer sci18
Math sci19
Mythology20
Sports21
Geograph22
History23
Politics 24
Art = category=25
Celebrities 26
Animals 27
Vehicles 28
Comics 29
Gadgets 30
anime/ manga 30
cartoon/ animations 31

 */}

        </>
    )
}
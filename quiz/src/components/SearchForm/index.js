import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import './index.css'



export const SearchForm = () => {
    // GetQuestions({ cat: 20, level: "easy", type: "multiple" })

    // let [urlType, SetUrlType] = useState (''); 

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

    const handleClickType = (e) => {
        e.preventDefault();
        // setTypeSelected(event.currentTarget.innerHTML)
        dispatch({ type: "SETTYPE", payload: e.target.id })
        // SetUrlType('&type='+ event.currentTarget.id)
    }


    return (
        <>

            {/* Ending up with loads of classNames */}
            <div className="dropdown">
                <button className="dropbtn-diff">Difficult</button>
                <div className="dropdown-content-diff">
                    <a onClick={setDifficulty} className="drop-items-diff drop-items" id="easy" >Piss easy </a>
                    <a onClick={setDifficulty} className="drop-items-diff drop-items" id="medium" >medium</a>
                    <a onClick={setDifficulty} className="drop-items-diff drop-items" id="hard" >Hard af</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn-cat">Category</button>
                <div className="dropdown-content-cat">
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="9" >General knowledge</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="11" >Films</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="15" >Games</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="27" >Animals</a>
                    <a onClick={handleBtnClick} className="drop-items-cat drop-items" id="18" >Computer Shit</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn-type">Type</button>
                <div className="dropdown-content-cat">
                    <a className="drop-items-type drop-items" id="boolean" onClick={handleClickType} >True/False</a>
                    <a className="drop-items-type drop-items" id="multiple" onClick={handleClickType} >Multiple</a>
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
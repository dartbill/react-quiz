import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./index.css";

export const GameProperties = () => {
  let [diffBtnText, setDiffBtnText] = useState("Difficulty");
  let [catBtnText, setCatBtnText] = useState("Category");
  let [typeBtnText, setTypeBtnText] = useState("Type");

  const dispatch = useDispatch();
  const handleBtnClick = (e) => {
    e.preventDefault();
    setCatBtnText(e.currentTarget.innerHTML);
    dispatch({ type: "SETCAT", payload: e.target.id });
  };

  const setDifficulty = (e) => {
    e.preventDefault();
    setDiffBtnText(e.currentTarget.id);
    dispatch({ type: "SETLEVEL", payload: e.target.id });
  };

  const handleClickType = (e) => {
    e.preventDefault();
    setTypeBtnText(e.currentTarget.innerHTML);
    dispatch({ type: "SETTYPE", payload: e.target.id });
  };

  return (
    <div id="gameProperties">
      <div className="dropdown">
        <button className="dropbtn-diff drop">{diffBtnText}</button>
        <div className="dropdown-content-diff">
          <a
            href="/#"
            onClick={setDifficulty}
            className="drop-items-diff drop-items drop"
            id="easy"
          >
            Piss Easy
          </a>
          <a
            href="/#"
            onClick={setDifficulty}
            className="drop-items-diff drop-items drop"
            id="medium"
          >
            Medium
          </a>
          <a
            href="/#"
            onClick={setDifficulty}
            className="drop-items-diff drop-items drop"
            id="hard"
          >
            Hard af
          </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn-cat drop">{catBtnText}</button>
        <div className="dropdown-content-cat">
          <a
            href="/#"
            onClick={handleBtnClick}
            className="drop-items-cat drop-items drop"
            id="9"
          >
            General knowledge
          </a>
          <a
            href="/#"
            onClick={handleBtnClick}
            className="drop-items-cat drop-items drop"
            id="11"
          >
            Films
          </a>
          <a
            href="/#"
            onClick={handleBtnClick}
            className="drop-items-cat drop-items drop"
            id="15"
          >
            Games
          </a>
          <a
            href="/#"
            onClick={handleBtnClick}
            className="drop-items-cat drop-items drop"
            id="27"
          >
            Animals
          </a>
          <a
            href="/#"
            onClick={handleBtnClick}
            className="drop-items-cat drop-items  drop"
            id="18"
          >
            Computer Shit
          </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn-type drop">{typeBtnText}</button>
        <div className="dropdown-content-cat">
          <a
            href="/#"
            className="drop-items-type drop-items drop"
            id="boolean"
            onClick={handleClickType}
          >
            True/False
          </a>
          <a
            href="/#"
            className="drop-items-type drop-items drop"
            id="multiple"
            onClick={handleClickType}
          >
            Multiple
          </a>
        </div>
      </div>
    </div>
  );
};

// use the category num in the id=''

// General knowledge= category=9
// Book = category=10
// Film 11
// Music 12
// Theatre 13
// Tv 14
// Game 15
// Boardgames 16
// Natural sci 17
// Computer sci18
// Math sci19
// Mythology20
// Sports21
// Geograph22
// History23
// Politics 24
// Art = category=25
// Celebrities 26
// Animals 27
// Vehicles 28
// Comics 29
// Gadgets 30
// anime/ manga 30
// cartoon/ animations 31

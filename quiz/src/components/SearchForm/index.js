import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import './index.css'



const SearchForm = () => {
    // GetQuestions({ cat: 20, level: "easy", type: "multiple" })
        const dispatch = useDispatch()
        const handleBtnClick = () => {
            dispatch ({ type: "DESPOSIT", payload: 100})
        }
      return (
        <>

{/* Ending up with loads of classNames */}
<div className="dropdown">
  <button className="dropbtn-diff">Difficult</button>
  <div className="dropdown-content-diff">
    <a className="drop-items-diff drop-items drop-items-easy" href="#">easy </a>
    <a className="drop-items-diff drop-items drop-items-easy" href="#">medium</a>
  </div>

</div>



{/* THIS DOESNT WORK??? */}
{/* 
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form> */}

    )
}
export default SearchForm
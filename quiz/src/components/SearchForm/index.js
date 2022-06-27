import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './index.css'
import axios from "axios";

const SearchForm = () => {
    const dispatch = useDispatch()
    
    let [diffSelected, setDiffSelected] = useState('');
    let [catSelected, setCatSelected] = useState ('');
    let [typeSelected, setTypeSelected] = useState ('');
    let [urlDiff, SetUrlDiff] = useState ('');
    let [urlCat, SetUrlCat] = useState (''); 
    let [urlType, SetUrlType] = useState (''); 
    let [customURL, setCustomUrl] = useState ('')
    
    const handleClickDiff = event => {
        event.preventDefault();       
        setDiffSelected(event.currentTarget.id)
    }
    useEffect(() => {
        SetUrlDiff('&difficulty=' + diffSelected.toLowerCase());
      }, [diffSelected]);
    

    const handleClickCat = event => {
        event.preventDefault();       
        setCatSelected(event.currentTarget.innerHTML)
        SetUrlCat('&category='+ event.currentTarget.id)
    }

    const handleClickType = event => {
        event.preventDefault();       
        setTypeSelected(event.currentTarget.innerHTML)
        SetUrlType('&type='+ event.currentTarget.id)
    }

    const handleClickmakeURL= event => {
        event.preventDefault();       
        setCustomUrl('https://opentdb.com/api.php?&amount=10'+ urlDiff + urlCat + urlType)
    }


/////////////////////
//API
// ////////////////////
const [repos, setRepos] = useState([{ }]);

    async function fetchData() {
        try {
            
        const quizAPI = await axios.get(customURL);
        console.log('TOM',quizAPI.data);
        setRepos(quizAPI.data);


    } catch (err) {
        console.warn(err.message);
        alert("No API fetched");
    }
}


      return (
        <>
        <p className="customURL">API URL:{customURL}</p>
        <h13 >Difficulty: {diffSelected}</h13>
        <h13 >Category: {catSelected}</h13>
        <h13 >Type: {typeSelected}</h13>

        <div className="SetupForm" >

        <div className="dropdown">
            <button className="dropbtn-diff">Difficult</button>
            <div className="dropdown-content-diff">
                <a className="drop-items-diff drop-items" id="Easy" onClick={handleClickDiff} href="#">Piss easy </a>
                <a className="drop-items-diff drop-items" id="Medium" onClick={handleClickDiff}  href="#">medium</a>
                <a className="drop-items-diff drop-items" id="Hard" onClick={handleClickDiff}  href="#">Hard af</a>
            </div>
        </div>
{/* i can change the id to lower case ^ and then i can  remove the tolowercase()*/}

        <div className="dropdown">
            <button className="dropbtn-cat">Category</button>
            <div className="dropdown-content-cat">
                <a className="drop-items-cat drop-items" id="9" onClick={handleClickCat} href="#">General knowledge</a>
                <a className="drop-items-cat drop-items" id="11" onClick={handleClickCat} href="#">Films</a>
                <a className="drop-items-cat drop-items" id="15" onClick={handleClickCat} href="#">Games</a>
                <a className="drop-items-cat drop-items" id="27" onClick={handleClickCat} href="#">Animals</a>
                <a className="drop-items-cat drop-items" id="18" onClick={handleClickCat} href="#">Computer Shit</a>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn-type">Category</button>
            <div className="dropdown-content-cat">
                <a className="drop-items-type drop-items" id="boolean" onClick={handleClickType} href="#">True/False</a>
                <a className="drop-items-type drop-items" id="multiple" onClick={handleClickType} href="#">Multiple</a>
            </div>
        </div>

        <button onClick={handleClickmakeURL}>makeURL</button>        
        <button onClick={fetchData}>get API</button>        

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
export default SearchForm
// https://bobbyhadz.com/blog/react-onclick-get-id-of-element
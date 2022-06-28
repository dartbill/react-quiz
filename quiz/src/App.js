
import './index.css';

import React, { useState, useEffect } from "react";
import * as Pages from './pages'
import {Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { QuizPage } from './pages/Quiz';


// import './App.css';

// import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001"; //endpoint of the server once it's running



function App() {

  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  //   return () => socket.disconnect();
  // }, []);


  //we need to work out routes so that we can redirect

  return (
    <div className="App">

  {/* the old stuff! */}

      {/* <header className="App-header">
        <Pages.Home />
        <Pages.QuizPage /> */}
        {/* <p>
          It's <time dateTime={response}>{response}</time>
        </p> */}
      {/* </header> */}


  {/* the new stuff! */}

      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/quiz' element={<QuizPage/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

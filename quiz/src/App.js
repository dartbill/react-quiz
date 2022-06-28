import React, { useState, useEffect } from "react";
import { Home } from './pages'
import TomsTest from "./pages/TomsTest";
import {Routes, Route, Link } from 'react-router-dom';

import './App.css';
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

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Home />
    //     {/* <p>
    //       It's <time dateTime={response}>{response}</time>
    //     </p> */}
    //   </header>
    // </div>

    <div className="App" >
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/TomsTest' element={<TomsTest/>} />
    </Routes>
  </div>

  );
}

export default App;

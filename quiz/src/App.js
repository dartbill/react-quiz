
import './index.css';

import React, { useState, useEffect } from "react";
import * as Pages from './pages'

// import './App.css';

import socketIOClient from "socket.io-client";
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
    <div className="App">
      <header className="App-header">
        <Pages.Home />
        <Pages.QuizPage />
        {/* <p>
          It's <time dateTime={response}>{response}</time>
        </p> */}
      </header>

    </div>
  );
}

export default App;

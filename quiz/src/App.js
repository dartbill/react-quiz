
import './index.css';

/*import React, { useState, useEffect } from "react";*/
import * as Pages from './pages'

// import './App.css';

//import socketIOClient from "socket.io-client";
//const ENDPOINT = "http://127.0.0.1:4001"; //endpoint of the server once it's running
// import { io } from "socket.io-client";

// // const io = require("socket.io-client");
// export const socket = io("http://localhost:5000", {
//   withCredentials: true,

// });

/*const io = require("socket.io-client");
export const socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});*/
// export const socket = io("http://localhost:5000");
// const ENDPOINT = "http://127.0.0.1:4001"; //endpoint of the server once it's running



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
      <header className="App-header">
        <Pages.Home />
        <Pages.QuizPage />
        {/* <p>
          It's <time dateTime={response}>{response}</time>
        </p> */}

        <Pages.HighscorePage />
        <Pages.LoginPage />
      </header>

    </div>
  );
}

export default App;

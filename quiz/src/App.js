import './index.css';

import React from 'react';
// useState, useEffect?
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
// Link?

// import './App.css';

// import { io } from "socket.io-client";

// // const io = require("socket.io-client");
// export const socket = io("http://localhost:5000", {
//   withCredentials: true,

// });

// const io = require("socket.io-client");
// export const socket = io("http://localhost:5000", {
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
// });
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
		<div className='App'>
			{/* the old stuff! */}

			{/* <header className="App-header">
        <Pages.Home />
        <Pages.QuizPage /> */}
			{/* <p>
          It's <time dateTime={response}>{response}</time>
        </p> */}
			{/* </header> */}
			<header>
				<h1>App</h1>
				<Pages.HighscorePage />
				<Pages.StartPage />
			</header>

			{/* the new stuff! */}

			<Routes>
				<Route path='/' element={<Pages.Home />} />
				<Route path='/start' element={<Pages.StartPage />} />
				<Route path='/quiz' element={<Pages.QuizPage />} />
				<Route path='/final' element={<Pages.FinalScorePage />} />
				<Route path='/highscores' element={<Pages.FinalScorePage />} />
			</Routes>
		</div>
	);
}

export default App;

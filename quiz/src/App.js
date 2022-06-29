import "./index.css";
import React from "react";
import * as Pages from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/start" element={<Pages.StartPage />} />
                <Route path="/quiz" element={<Pages.QuizPage />} />
                <Route path="/final" element={<Pages.FinalScorePage />} />
                <Route path="/highscores" element={<Pages.HighscorePage />} />
            </Routes>
        </div>
    );
}

export default App;

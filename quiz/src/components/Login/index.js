import React, { useState } from "react";
// import { io } from "socket.io-client";

import { socket } from "../../App";

export const Login = () => {
    const [roomText, setRoomText] = useState("");
    const [players, setPlayers] = useState([]);

    socket.on("attachRoom", (room) => {
        setRoomText(room);
    });

    socket.on("addPlayer", (room, user) => {
        console.log(user, room);
    });

    return (
        <>
            <div className="home-box">
                <p className="connection"></p>
                <h3>Room Name:</h3>
                <div className="room">{roomText}</div>
                <h3>Players</h3>
                <div className="players">{players.current}</div>
            </div>
            <button>Start game!</button>
        </>
    );
}
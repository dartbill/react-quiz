import React, { useState } from "react";
import { Login } from "../index";
import { socket } from "../../App";


export const UserLogin = () => {
    const [usernameInput, setUsernameInput] = useState("");
    const [roomInput, setRoomInput] = useState("");

    const [room, setRoom] = useState("");

    //Controlled forms
    const updateUsername = (e) => {
        const input = e.target.value;
        setUsernameInput(input);
    };

    const updateRoom = (e) => {
        const input = e.target.value;
        setRoomInput(input);
    };

    const handleSubmitRoom = (e) => {
        e.preventDefault();

        let chosenRoom = roomInput;
        setRoom(chosenRoom);

        socket.emit("joinRoomPress", chosenRoom);
    };
    const handleSubmitUser = (e) => {
        e.preventDefault();

        let user = usernameInput;
        socket.emit("addUserPress", user, room);
    };

    return (
        <>
            <Login />
            <form

                className=""
                onSubmit={handleSubmitRoom}
            >
                <label htmlFor="room"></label>
                <input
                    type="text"
                    id="room"
                    name="room"
                    placeholder="Room"
                    value={roomInput}
                    onChange={updateRoom}
                />

                <div className="form-nav">
                    <button type="submit" className="join-btn">
                        Join Room
                    </button>
                </div>
            </form>

            <form

                className=""
                onSubmit={handleSubmitUser}
            >
                <label htmlFor="username"></label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={usernameInput}
                    onChange={updateUsername}
                />{" "}
                <div className="form-nav">
                    <button type="submit" className="username-btn">
                        Select Username
                    </button>
                    <p className="arrow right"></p>
                </div>
            </form>


        </>
    );
}
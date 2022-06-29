import React from "react";
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {

    const dispatch = useDispatch();
    const player1 = useSelector(state => state.player1)
    const player2 = useSelector(state => state.player2)
    const playerCount = useSelector(state => state.playerCount)

    console.log(playerCount)
    console.log("this is player one " + player1 + " this is player two " + player2)

    const updateUsername = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_PLAYER1',
            payload: {
                username: e.target.player1.value
            }
        })
        // console.log(player1)
        dispatch({
            type: 'SET_PLAYER2',
            payload: {
                username: e.target.player2.value
            }
        })
        // console.log(player2)
    }

    return (
        <>
            <form className="add-form" onSubmit={updateUsername}>

                <div className="form-control">
                    <label>Username 1</label>
                    <input
                        type="text"
                        id="player1"
                        placeholder="Add Username"
                    />
                </div>

                <div className="form-control">
                    <label>Username 2</label>
                    <input
                        type="text"
                        id="player2"
                        placeholder="Add Username"
                    />
                </div>
                <input
                    type="submit"
                    value="Save Task"
                />
            </form>
        </>
    );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const UsernameEntry = () => {
    const dispatch = useDispatch();
    const playerCount = useSelector((state) => state.playerCount);

    const updateUsername = (e) => {
        e.preventDefault();
        switch (playerCount) {
            case 2:
                dispatch({
                    type: "SET_PLAYER1",
                    payload: {
                        username: e.target.player1.value,
                    },
                });
                dispatch({
                    type: "SET_PLAYER2",
                    payload: {
                        username: e.target.player2.value,
                    },
                });
                break;
            default:
                dispatch({
                    type: "SET_PLAYER1",
                    payload: {
                        username: e.target.player1.value,
                    },
                });
                break;
        }
    };

    return (
        <>
            <form className="add-form" onSubmit={updateUsername}>
                {playerCount === 1 ? (
                    <div className="form-control">
                        <label>Username 1</label>
                        <input
                            type="text"
                            id="player1"
                            placeholder="Add Username"
                        />
                    </div>
                ) : (
                    <>
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
                    </>
                )}

                <input type="submit" value="Save" />
            </form>
        </>
    );
};

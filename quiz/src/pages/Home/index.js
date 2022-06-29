import { SearchForm } from "../../components";
import { Login } from "../../components";
import { NavLink } from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <Login />
            <SearchForm />
            <NavLink className="ourBtns" to="/quiz">
                Play!
            </NavLink>
        </>
    );
};

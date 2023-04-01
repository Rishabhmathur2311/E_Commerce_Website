import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage=()=>{
    return (
        <div>
        <h2>404 Page not Found</h2>
        <NavLink to="/">
            <button type="submit">Back to Home</button>
        </NavLink>
        </div>
    );
}

export default ErrorPage
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () =>{
    return (
        <Wrapper>
        <div className="header">
            <NavLink to="/">
                <img src="./logo_transparent.png" alt="my logo image"/>
            </NavLink>
            </div>
            <div className="na">
            <Nav />
            </div>
            </Wrapper>
    );
};

const Wrapper = styled.section`
    .header{
        display: inline-block;
        // background-color: purple;
        width:20%;
        // margin-top: 1%;
    }
    .na{
        display: inline-block;
        width: 80%;
        text-align: right;
        // margin: 0 3% 2% 0;
        padding: 0 3% 
    }
    img{
        margin: 0;
        width: 50%;
    }
`;


export default Header
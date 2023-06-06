import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import { useCartContext } from "./context/CartContext";

const Nav=()=>{
    const {total_item}=useCartContext();
    return (
        <Wrapper>
        <div>
            <ul>
                <li >
                    <NavLink to="/">Home</NavLink>
                </li>
                {/* <li >
                    <NavLink to="/about">About</NavLink>
                </li> */}
                <li >
                    <NavLink to="/products">products</NavLink>
                </li>
                <li >
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li >
                    <NavLink to="/cart">Cart <AiOutlineShoppingCart />{total_item}</NavLink>
                </li>
            </ul>
        </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
*{
    color:  #0015A0;
}
li{
    // grid-template-columns: repeat(2, 1fr);
    display: inline-block;
    width:10%;
    margin: 2%;
    font-size: 200%;
  }
  ul{
    margin: 0 2% 0 2%;
  }
`;

export default Nav
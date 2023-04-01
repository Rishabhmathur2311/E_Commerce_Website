import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./cartAmountToggle";
import { useCartContext } from "./context/CartContext";
import styled from "styled-components";

const AddToCart=({product})=>{
    const {addToCart}=useCartContext();
   const [amount,setAmount]=useState(0);
   const {id, stock}=product;
    const setIncrease=()=>{
        return(
           amount<stock?setAmount(amount+1):setAmount(amount)
        );
    }

    const setDecrease=()=>{
        return(
           amount>0?setAmount(amount-1):setAmount(amount)
        );
    }

    return (
        <Wrapper>
        <div>
            <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      {/* {console.log("",id)} */}
            <NavLink to="/cart" onClick={()=>addToCart(id, amount, product)}>
            <button  >Add To Cart</button>
            </NavLink>
        </div>
        </Wrapper>
    );
}
const Wrapper=styled.section`
button{
    margin: 2%;
}

`;
export default AddToCart;
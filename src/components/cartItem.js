import React from "react";
import CartAmountToggle from "./cartAmountToggle";
import { FaTrash } from "react-icons/fa";
import ProductPrice from "./Helper/ProductPrice"
import { useCartContext } from "./context/CartContext";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

 

const CartItem = ({ id, name, image,  price, amount, stock}) => {
  const { removeItem } = useCartContext();
  const setDecrease = () => {
    if({amount}>0){
      return  {amount}-1;
    }
    else{
      return {amount};
    }
  };

  const setIncrease = () => {
    
      return {amount}+1;
   

  };
  return (
    <Wrapper>
      
        <table class="table">
  {/* <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      </tr>
  </thead> */}
 
        {/* <th scope="row">1</th> */}
        <td>
            {/* <img src={image} alt={id} /> */}
        
        
          {name}
          </td>
      
      {/* price   */}
      <td>
        
          <ProductPrice price={price} />
        
      </td>

      {/* Quantity  */}
      <td id="amt">
      {/* <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      /> */}
      {amount}
</td>
      {/* //Subtotal */}
      <td>
        
          <ProductPrice price={price * amount} />
       
      </td>
      
      <td>
        <button  className="btn" onClick={() => removeItem(id)}>
        <FaTrash />
        </button>
        </td>
        </table>
        <hr />
        
    </Wrapper>
  );
};

const Wrapper=styled.section`
#amt{
  margin:5%;
}
.remove{
 margin: 5%;
}
.btn{
  border: none;
  margin-left: 4%;
  font-size: 1.2em;
  margin-top: 0;
  padding: 0;
  border-size: 0;
  color: red;
}
img{
  width: 5%;
}
th{
  width: 245.26px;
  height: 31.33px;
}
td{
  width: 272.2px;
  height: 31.33px;
  text-align: left;
  // font-weight: bold;
  font-size: 1.4em;
}
`;
export default CartItem;
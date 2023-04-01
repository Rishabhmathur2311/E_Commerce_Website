import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <span>
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        </span>
        <span>{amount}</span>
        <span>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </span>
      </Wrapper>
  );
};
const Wrapper=styled.section`
button{
  margin: 0 1.5% 0 1.5%;
}
`;
export default CartAmountToggle;
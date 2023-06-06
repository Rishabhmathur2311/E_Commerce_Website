import styled from "styled-components";
import React from "react";
import { useCartContext } from "./components/context/CartContext";
import CartItem from "./components/cartItem";
import { NavLink } from "react-router-dom";
import ProductPrice from "./components/Helper/ProductPrice";
// import styled from "styled-components";

  const Cart = () => {
    const { cart, clearCart,total_amount, shipping_fee } = useCartContext();
    console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
    console.log("",cart);
    return (
      <Wrapper>
      <table class="table">
      
  <thead>
    {/* <tr> */}
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th id="rem">Remove</th>
      {/* </tr> */}
  </thead>
  </table>
          
          <hr />
  
          {/* <tbody > */}
            {/* console.log(cart[0]); */}
            
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          {/* </tbody> */}
          
            <NavLink to="/products">
            <button>
              Continue Shopping
              </button>
            </NavLink>
          
          <button className="right" onClick={clearCart}>
            Clear Cart
          </button>
          <div className="grid amount">
            <div className="abc">
              {/* <h2>Amount</h2> */}
              {/* <table> */}
                {/* <thead>
                <th className="rowGap"></th>
                <th className="rowGap"></th>
                </thead>
                <tr>
                <td>Subtotal</td>
                <td><ProductPrice price={total_amount} /></td>
                </tr>
                <tr>
                  <td>Shipping Fees</td>
                  <td><ProductPrice price={shipping_fee} /></td>
                </tr>
               <tr>
                <td><hr /></td><td><hr /></td></tr>
                <tr>
                  <td>Total Price</td>
                  <td><ProductPrice price={total_amount+shipping_fee} /></td>
                </tr>
              </table> */}
              <br />
      
            </div>
          </div>
        </Wrapper>
    );
  };
  

export default Cart;
const Wrapper = styled.section`
.rowGap{
  width: 10em;
  height: 0%;
}
.right{
  display: flex;
  float: right;
  justify-content: center;
}
td{
  margin: 1em;
  font-size: 1.5em;
}
button{
  cursor: pointer;
  border: solid 2px ;
  background-color: transparent;
  height: 15%;
  width: 15%;
  color: #0015A0;
  font-size: 1.5em;
  margin:0 2% 2% 2%; 
  // box-shadow: 0 0px 6px 0px rgba(0, 0, 0, 0.6);
  text-align: center;
  // display: flex;
  // justify-content: center;
}
button:hover{
  background-color: #2b1b9a;
  color: #F0F8FF;
  font-weight: bold;
}
h2{
  margin: 0 0 5% 0;
}
h3{
  margin: 0.7% 0 0.7% 0%;
}
.amount{
  
  word-spacing: 4px;
  justify-content: right;
  margin-right: 20%;

}
  th{
    width: 245.26px;
    height: 31.33px;
    font-size: 1.4em;
  #rem{
    margin-left: 0%;
  }
}
`;
//   padding: 9rem 0;

//   .grid-four-column {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   .grid-five-column {
//     grid-template-columns: repeat(4, 1fr) 0.3fr;
//     text-align: center;
//     align-items: center;
//   }
//   .cart-heading {
//     text-align: center;
//     text-transform: uppercase;
//   }
//   hr {
//     margin-top: 1rem;
//   }
//   .cart-item {
//     padding: 3.2rem 0;
//     display: flex;
//     flex-direction: column;
//     gap: 3.2rem;
//   }

//   .cart-user--profile {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 1.2rem;
//     margin-bottom: 5.4rem;

//     img {
//       width: 8rem;
//       height: 8rem;
//       border-radius: 50%;
//     }
//     h2 {
//       font-size: 2.4rem;
//     }
//   }
//   .cart-user--name {
//     text-transform: capitalize;
//   }
//   .cart-image--name {
//     /* background-color: red; */
//     align-items: center;
//     display: grid;
//     gap: 1rem;
//     grid-template-columns: 0.4fr 1fr;
//     text-transform: capitalize;
//     text-align: left;
//     img {
//       max-width: 5rem;
//       height: 5rem;
//       object-fit: contain;
//       color: transparent;
//     }

//     .color-div {
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       gap: 1rem;

//       .color-style {
//         width: 1.4rem;
//         height: 1.4rem;

//         border-radius: 50%;
//       }
//     }
//   }

//   .cart-two-button {
//     margin-top: 2rem;
//     display: flex;
//     justify-content: space-between;

//     .btn-clear {
//       background-color: #e74c3c;
//     }
//   }

//   .amount-toggle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2.4rem;
//     font-size: 1.4rem;

//     button {
//       border: none;
//       background-color: #fff;
//       cursor: pointer;
//     }

//     .amount-style {
//       font-size: 2.4rem;
//       color: ${({ theme }) => theme.colors.btn};
//     }
//   }

//   .remove_icon {
//     font-size: 1.6rem;
//     color: #e74c3c;
//     cursor: pointer;
//   }

//   .order-total--amount {
//     width: 100%;
//     margin: 4.8rem 0;
//     text-transform: capitalize;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-items: flex-end;

//     .order-total--subdata {
//       border: 0.1rem solid #f0f0f0;
//       display: flex;
//       flex-direction: column;
//       gap: 1.8rem;
//       padding: 3.2rem;
//     }
//     div {
//       display: flex;
//       gap: 3.2rem;
//       justify-content: space-between;
//     }

//     div:last-child {
//       background-color: #fafafa;
//     }

//     div p:last-child {
//       font-weight: bold;
//       color: ${({ theme }) => theme.colors.heading};
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-five-column {
//       grid-template-columns: 1.5fr 1fr 0.5fr;
//     }
//     .cart-hide {
//       display: none;
//     }

//     .cart-two-button {
//       margin-top: 2rem;
//       display: flex;
//       justify-content: space-between;
//       gap: 2.2rem;
//     }

//     .order-total--amount {
//       width: 100%;
//       text-transform: capitalize;
//       justify-content: flex-start;
//       align-items: flex-start;

//       .order-total--subdata {
//         width: 100%;
//         border: 0.1rem solid #f0f0f0;
//         display: flex;
//         flex-direction: column;
//         gap: 1.8rem;
//         padding: 3.2rem;
//       }
//     }
//   }
// `;

// export default Cart;

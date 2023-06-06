import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/CartReducer";

const CartContext = createContext();

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("thapaCart");
//   // if (localCartData === []) {
//   //   return [];
//   // } else {
//     return JSON.parse(localCartData);
//   // }
// };

const initialState = {
  cart: [],
  // cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
}; 

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id,  amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id,  amount, product } });
  };

  const removeItem=(id)=>{
    dispatch({type: "REMOVE_ITEM", payload: id});
  }

  const clearCart=()=>{
    dispatch({type: "CLEAR_CART"});
  }
//   const removeItem = (id) => {
//     dispatch({ type: "REMOVE_ITEM", payload: id });
//   };


// add data to local buffer
// useEffect(() => {
//   dispatch({ type: "CART_TOTAL_ITEM" });
//   dispatch({ type: "CART_TOTAL_PRICE" });
//   // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

//   localStorage.setItem("thapaCart", JSON.stringify(state.cart));
// }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
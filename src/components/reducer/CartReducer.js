const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id,  amount, product } = action.payload;
      console.log(
        "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
        product
      );

      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id 
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      }
      else{
      let cartProduct;
  
      cartProduct = {
        id,
        name: product.name,
        
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
    if(action.type==="REMOVE_ITEM"){
      let updatedCart=state.cart.filter((curElem)=>{
        return curElem.id!==action.payload;
      })
      return {
        ...state,
        cart: updatedCart,
      };
    }
    if(action.type==="CLEAR_CART"){
      return {
        ...state,
        cart: [],
      };
    }
    if(action.type==="CART_TOTAL_ITEM"){
      let totalItem=state.cart.reduce((init, curElem)=>{
        init=init+curElem.amount;
        return init;
      },0);
      return {
        ...state,
        total_item: totalItem,
      };
    }
    if(action.type==="CART_TOTAL_PRICE"){
      let totalAmount=state.cart.reduce((init,curElem)=>{
        init=init+curElem.amount*curElem.price;
        return init;
      },0);
      return {
        ...state,
        total_amount: totalAmount,
      };
    }
    // if (action.type === "REMOVE_ITEM") {
    //   let updatedCart = state.cart.filter(
    //     (curItem) => curItem.id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     cart: updatedCart,
    //   };
    // }
  
    return state;
  };
  
  export default cartReducer;
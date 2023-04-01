import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";

const FilterContext=createContext();
const initialState={
    filter_error:false,
    filter_loading:false,
    filter_products:[],
    all_products: [],
    sorting_value:"lowest",
    filters:{
        text: "",
        category:  "all",
        company: "all",
    },
};
export const FilterContextProvider=({children})=>{
    const {products}=useProductContext();
    const [state,dispatch]=useReducer(FilterReducer,initialState);

    const getFilterProduct=({products})=>{
        dispatch({type:"FILTER_LOADING"})
        try {
            dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
        } catch (error) {
            dispatch({type:"FILTER_ERROR"})
        }
    }

    const sorting=(event)=>{
        let userVal=event.target.value;
        dispatch({type:"GET_SORT_VALUE" , payload:userVal});
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
      };

    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type:"SORTING_PRODUCTS" });
    },[products,state.sorting_value,state.filters]);

    useEffect(()=>{
        // dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
        getFilterProduct({products})
    },[products])

return (
    <FilterContext.Provider value={{...state,sorting,updateFilterValue}} >{children}</FilterContext.Provider>
);
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}
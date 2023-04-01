import React from "react";
import { useFilterContext } from "./context/FilterContex";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const FilterSection=()=>{
    const {filters: {text, category}, updateFilterValue, all_products}=useFilterContext();
    const getUniqueData=(data,property)=>{
        let newVal=data.map((curElem)=>{
            return curElem[property];
        });
       return (newVal=[...new Set(newVal)]);
    }
    const categoryOnlyData=getUniqueData(all_products,"category");
    const companyOnlyData=getUniqueData(all_products,"company");
    return (
        <Wrapper>
        <div className="search">
            
        <form  onSubmit={(e) => e.preventDefault()}>
          <input
          
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
            ></input>
            
        </form>
        <h3>Category</h3>
        <br />
        <button type="button" name="category" value="all" onClick={updateFilterValue}>All</button>
        {categoryOnlyData.map((curElem,index)=>{
            return(
                <button key={index} type="button" name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button>
            );
        })}
        <br />
        <h3>Company</h3>
        <br />
        <button type="button" name="company" value="all" onClick={updateFilterValue}>All</button>
        {companyOnlyData.map((curElem,index)=>{
            return (
                <button key={index} type="button" name="company" value={curElem} onClick={updateFilterValue}>{curElem}</button>
            );
        })}
        
        </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
h3{
    margin: 0 0 0 2% ;
}
input{
    border: none;
    border-bottom: 2px solid #0015A0;
    font-family: 'Montserrat', sans-serif;
    margin: 2%;
    width: 15%
    font-size: 1.2em;
}
input:hover{
    font-weight: bold;
}

button:hover {
    font-weight: bold;
  }
button{
    cursor: pointer;
        border: none;
       border-bottom: solid 2px ;
        background-color: transparent;
        height: 4%;
        width: 6%;
        color: #0015A0;
        font-size: 1.2em;
        margin:0 2% 2% 2%; 
        // box-shadow: 0 0px 6px 0px rgba(0, 0, 0, 0.6);
        text-align: center;
        float: center;
}
`;
export default FilterSection;
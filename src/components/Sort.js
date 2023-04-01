import React from "react";
import { useFilterContext } from "./context/FilterContex";
import styled from "styled-components";

const Sort=()=>{
    const {sorting}=useFilterContext();
    return (
        <Wrapper>
        <div>
            <h3>Filter</h3>
            <div className="a">
            <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onClick={sorting}   className="form-control-sm " >
                    <option value="lowest">price(lowest to highest)</option>
                    <br />
                    <option value="highest">price(highest to lowest)</option> <br />
                    <option value="a-z">price(a-z)</option> <br />
                    <option value="z-a">price(z-a)</option> <br />
                    </select>
            </form>
            </div>
        </div>
        </Wrapper>
    );
}
const Wrapper= styled.section`
option{
    font-size: 1em;
    border: 2%;
}
h3{
    margin: 0 0 0 2%;
}
select {
    width: 150px;
    margin: 10px;
    font-size: 1.25em;
}
select:focus {
    min-width: 150px;
    width: auto;
    font-size: 1.25em;
}
a:hover{
    input:hover{
        font-weight: bold;
    }
}

`;
export default Sort;
import React from "react";
import { NavLink } from "react-router-dom";
import ProductPrice from "./Helper/ProductPrice";
import styled from "styled-components";
const Product = (curElem) => {
  const { id, name, image, price, category, description,reviews,company, stock,star } = curElem;
  return (
    <Wrapper>
      {/* <div className="col-lg-4 col-md-3 col-2">  */}
      
       <NavLink to={`/singleproduct/${id}`}>
       <div className="card">
      {/* <div className="card-header"> */}
      
        <figure>
          <img src={image} alt={name} />
          {/* <figcaption>{name}</figcaption> */}
        </figure>
        <hr />
       
        
         
            <h2>{name}</h2>
            <h2><ProductPrice price={price}/></h2>
           <h2> {reviews}</h2>
            {stock}
            {company}
            {star}
            {/* <h3>{description}</h3> */}
            {/* </div> */}
            </div>
            </NavLink>
            
            
            {/* </div> */}
            
            </Wrapper>
  );
};
const Wrapper = styled.section`
// .card-header{
//   border: none;
//   background-color:
//     background-color: #F0F8FF;
//   width: 100%;
//   // text-align: right;
//   display: inline-block;
//   vertical-align: text-right;

// }
.card{ 
  text-align: center;
}
h3{
  margin: 2%;
}
img{
  margin: auto;
  padding: 0;
  width: 100%;
}
h3:hover{
  text-decoration: none;
}
figure{
   margin: 0;
}
hr{
  margin-top: 0;
}
`;
export default Product; 
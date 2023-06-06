import React from "react";
import styled from "styled-components";
import { useFilterContext } from "./components/context/FilterContex";
import Product from "./components/Product";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";

const Products = () => {
  const {filter_products,filter_loading}=useFilterContext();
  if(filter_loading){
    return(
      <div>.....Loading</div>
    );
  }
  return (
  <Wrapper>
    <span>
    <FilterSection />
    </span>
    <span>
    <Sort />
    </span>
    <div >
    {/* <ProductList /> */}
    {/* <div className="col-lg-4 col-md-3 col-2"> */}
      <div className="grid grid-three-column">
   { filter_products.map((curElem,id)=>{
      return (
      // <div>
      <Product key={curElem.id} {...curElem} />
      // </div>
      );
    })}
    </div>
    </div>
    {/* </div> */}
    <Footer />
     </Wrapper>
  );
    
};
// const Wrapper = styled.section`

// `;
//   // .grid-filter-column {
//   //   grid-template-columns: 0.2fr 1fr;
//   // }

//   // @media (max-width: ${({ theme }) => theme.media.mobile}) {
//   //   .grid-filter-column {
//   //     grid-template-columns: 1fr;
//   //   }
//   // }
//   .ab{
//     background-color: purple;
//   }
// `;
const Wrapper = styled.section`
.card-deck{
    background-color: #F0F8FF;
}
.card-header{
    background-color: #F0F8FF;
}
card:hover{
  input:hover{
    font-weight: bold;
}
}
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
.leftDisplay{
  float: left;
  display: inline-block;
}
.rightDisplay{
  display: inline-block;
  float: right;
}
*{
  background-color: #F0F8FF;
}
`;

export default Products;

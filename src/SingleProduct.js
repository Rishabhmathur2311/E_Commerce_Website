import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "./components/context/ProductContext";
import ProductPrice from "./components/Helper/ProductPrice";
import Services from "./components/Services";
import SingleProductImage from "./components/SingleProductImage";
import AddToCart from "./components/AddToCart";
import Footer from "./components/Footer";
// import styled from "styled-components";

const API="https://api.pujakaitem.com/api/products";

const SingleProduct=()=>{

const {id}=useParams();
const {singleProduct,getSingleProduct}=useProductContext();
const {name,description,price,stock,reviews,company,stars,image}=singleProduct;
useEffect(()=>{
  getSingleProduct(`${API}?id=${id}`)
},[])


// if(isSingleLoading){
//   return <div>.......Loading</div>
// }

return (
  <Wrapper>
    <br />
  <div><h2>
  <NavLink to="/">Home/</NavLink>{name}
  </h2>
    <div className="grid grid-two-column">
    
    <div>
    <SingleProductImage imgs={image}/>
    </div>
    <div>
      <h1>
    {name}
    </h1>
    <h2>
    <p>{stars} stars</p>
    <p>{reviews} Reviews</p>
    MRP:
      <del><ProductPrice price={price+250000}/></del>
     <p><b>Deal of the day: <ProductPrice price={price}/></b></p>
      <div className="desc">{description}</div>
      {/* <Services /> */}
      <p>Availability: {stock>0 ? "In Stock" : "out of Stock"} ({stock} left)</p>
     <p> Brand: {company}</p>
     {/* <AddToCart product={singleProduct}/> */}
     {/* {console.log("",singleProduct)} */}
     {/* <AddToCart product={singleProduct} /> */}
     <div className="serv">
     <h6><Services /></h6></div>
     {stock > 0 && <AddToCart product={singleProduct} />}
     </h2>
  </div>
  </div>
  </div>
  {/* <Footer /> */}
  </Wrapper>
);
}
const Wrapper = styled.section`
*{
  color: #0015A0;
}
p{
  margin: 2%;
}
h1{
  font-weight: bold;
  font-size: 6em;
}
*{
  background-color: #F0F8FF;
}
.desc{
  word-spacing: 0.5em;
  line-height: 1.5em;
}
.serv{
  font-size: 1em;
}

`;
//   .container {
//     padding: 9rem 0;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;


export default SingleProduct;

import React, { useContext } from "react";
import { AppProvider } from "./context/ProductContext";
import FeatureProduct from "./Featureproduct";
import styled from "styled-components";

const HeroSection = ({myData}) =>{
    const {name} = myData;
    // const fname=useContext(AppProvider);
    return (
        <Wrapper>
        {/* <div className="ab"> */}
            
            <div className=" intro grid grid-two-column">
            <div className="abc">
            <h2>Welcome To</h2>
            <h1>Rishabh {name}</h1>
            <br /><br />
            <h3>The e-commerce platform that you can trust.</h3>
            <h3>Our Products:</h3>
            <h3>
            <ul>
                <li >Laptops</li>
                <li >Smart Phones</li>
                <li >Watches</li>
                <li >and many  more....</li>
            </ul></h3>
            </div>
            <div className="imag">
            <img src="../../intro-3-1.jpg" alt="intro"></img>
            
            </div >
            </div>
            {/* <div> */}
            <FeatureProduct />
            {/* </div> */}
        {/* //  </div>  */}
        </Wrapper>
    );
}
const Wrapper=styled.section`
.abc{
    margin: 5% 0 8% 0;
    // max-width: 50%;
    // padding: 0;
    
}
h1{
    font-weight: bold;
    font-size: 6em;
}
// h2, h3{
//     text-align: center;
// }
.intro{
margin: 0 0 0 5%;
// text-align: right;
gap: 2%;
}
.img{
   width: 1000%;
}
li{
    margin: 1%;
    list-style-type: none;
}
`;
export default HeroSection
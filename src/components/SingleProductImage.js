import React, { useState } from "react";
import styled from "styled-components";
const SingleProductImage=({imgs=[{url:""}]})=>{

 const [MainImage,setMainImage]=useState(imgs[0]);

    return (
        <Wrapper>
        <div className="grid grid-two-row">
        <div>
        <div className="mainImage">
        <img src={MainImage.url} alt={MainImage.filename}/>
        </div>
          {imgs.map((curElm, index) => {
          return (
              <img
                src={curElm.url}
                alt={curElm.filename}
                key={index}
                onClick={() => setMainImage(curElm)}
              />
          );
        })}
        </div>
        {/* <div className="mainImage">
        <img src={MainImage.url} alt={MainImage.filename}/>
        </div> */}
        </div>
         </Wrapper> 
    );
    
}

const Wrapper = styled.section`
img{
    width:21%;
    display: flex;
    float: left;
    margin: 5% 2% 5% 2%;
}
.mainImage img{
  display: grid;
  justify-content: center;
  margin-top: 10%;
  width: 80%;
  height: 55%;
  margin-left: 13%;
  marfin-right: 3%;
}
.grid-two-column{
  gap: 0;
}
`;

export default SingleProductImage;
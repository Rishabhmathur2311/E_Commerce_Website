import { useProductContext } from "./context/ProductContext";
import Product from "./Product";
import styled from "styled-components";

const FeatureProduct = () => {
  const { isLoading, featureProducts,products } = useProductContext();

  // if (isLoading) {
  //   return <div> ......Loading </div>;
  // }

  return (
    <Wrapper>
    <div >
    </div>
      <div className="container">
        <div className="grid grid-three-column">
        {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper=styled.section`
.container {
  max-width: 120rem;
}
*{
  background-color: #F0F8FF;
}
`;

export default FeatureProduct;
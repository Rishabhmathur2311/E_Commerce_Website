import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components//Services";
import Trusted from "./components/Trusted";


const Home=() =>{
    const data={
        name: "Store",
    };
    return(
    <div>
        <HeroSection myData={data}/> 
        <Services />
        {/* <FeatureProduct /> */}
        <Trusted />
    </div>
    );
};
// const Wrapper = styled.section`

// `;
export default Home
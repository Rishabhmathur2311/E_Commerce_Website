import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components//Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";


const Home=() =>{
    const data={
        name: "Store",
    };
    return(
    <div>
        <HeroSection myData={data}/> 
        <Services />
        <hr />
        {/* <FeatureProduct /> */}
        {/* <Trusted /> */}
       <Footer />
    </div>
    );
};
// const Wrapper = styled.section`

// `;
export default Home
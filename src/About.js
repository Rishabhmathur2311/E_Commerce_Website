import React from "react";
import HeroSection from "./components/HeroSection";

const About=() =>{
   const data={
        name: "E-Commerce",
    };
    return (
        <div>
            <HeroSection myData={data} />
        </div>
    );
}

export default About
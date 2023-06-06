import React from "react";
import ServicesArray from "./ServicesArray";
import ServicesCard from "./ServicesCard";
import styled from "styled-components";

function CreateServices(contact){
    return (
        <div className="inlin">
        <ServicesCard 
        icon={contact.icon}
        description={contact.description}
        />
        </div>
    );
}

const Services=()=>{

    return (
        <Wrapper>
        <div className="grid grid-three-column ">
            {ServicesArray.map(CreateServices)}
        </div>
        </Wrapper>
    );
}

const Wrapper=styled.section`
.inlin{
    text-align: center;
    margin: 15% 9% 10% 10%;
    float: center;
    font-size: 3em;
}
`;

export default Services
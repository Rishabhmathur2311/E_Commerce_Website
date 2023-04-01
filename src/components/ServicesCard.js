import React from "react";
import ServicesArray from "./ServicesArray";

const ServicesCard=(props)=>{
return (
    <div>
        {props.icon}
        <br />
        {props.description}
    </div>
);
}

export default ServicesCard
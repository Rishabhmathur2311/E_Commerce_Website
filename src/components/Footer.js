import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { BsLinkedin,BsInstagram } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* <section> */}
          <div className=" intro">
            <div>
              <h1>Ready to get started? Talk to us today</h1>
            </div>

            <div>
              <button>
                <NavLink to="/"> Get Started </NavLink>
              </button>
            </div>
          </div>
        {/* </section> */}
        {/* footer section */}

        {/* <footer> */}
          <div className=" grid grid-four-column name">
            {/* <div >
              <h3>Rishabh E-Commerce</h3>
              <p>E-Commerce website you can trust. </p>
            </div> */}
            <div>
              <h4>Subscribe to get important updates</h4>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="Subscribe" />
              </form>
            </div>
            <div className="follow">
              {/* <h4>Follow Us</h4> */}
              <div >
                <div className="icon" >
                  <BsLinkedin />
                  <br />
                    LinkedIn
                </div>
                <div className="icon">
                  <BsInstagram />
                  <br />
                  Instagram
                </div>
                
              </div>
            </div>
            
          </div>

          <div>
            <hr />
            <div className="end">
                <div>
              <h4>
                @{new Date().getFullYear()} Rishabh E-Commerce. All Rights Reserved.
              </h4>
              </div>
              
              
            </div>
          </div>
        {/* </footer> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
.end{
    display: flex;
    justify-content: center;
}
.follow h3{
    margin: 0;
    margin-bottom: 2%;
}
h3{
    font-size: 1em;
}
*{
    color: #2b1b9a;
}
input{
    margin: 0%;
}
button:hover{
    font-weight: bold;
}
button{
        border: none;
       border-bottom: solid 2px ;
        background-color: transparent;
        height: 5%;
        width: 10%;
        font-size: 2em;
        margin:2% 2% 0% 2%; 
        text-align: center;
        float: center;
}
input:hover{
    font-weight: bold;
}
input{
    border: none;
    border-bottom: 2px solid #0015A0;
    // font-family: 'Montserrat', sans-serif;
    margin: 2%;
    width: 15%
    font-size: 0.6em;
}
form{
    font-size: 0.8em;
    margin: 0;
}
h4{
    font-size: 1.5em;
    margin: 0% 0 1% 0;
}
.icon{
    display: inline-block;
    margin: 0 2%;
}
*{
    gap: 0.5em;
}
.intro{
text-align: center;
margin: 2%;
}
h3{
    margin: 2% 0% 2% 0 ;
    font-size: 2em;
}
.name{
    text-align: center;
    font-size: 2em;
}
div{
    margin: 0%;
}
`;
//   .iSIFGq {
//     margin: 0;
//   }
//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);
//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }
//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;
//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};
//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }
//   .footer-bottom--section {
//     padding-top: 9rem;
//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;
//       .grid div:last-child {
//         justify-self: center;
//       }
//     }
//     footer {
//       padding: 9rem 0 9rem 0;
//     }
//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;

export default Footer;
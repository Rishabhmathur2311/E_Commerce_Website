import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
    <div>
      
      <h1>Contact Us</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2444863122914!2d75.80858891504391!3d26.863972383148695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66fe2879c7f%3A0xdfc843bf9b6f869a!2sMalaviya%20National%20Institute%20of%20Technology%20Jaipur%20(MNIT)!5e0!3m2!1sen!2sin!4v1678607260166!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{border:0}}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <form
  action="https://formspree.io/f/mleklndq"
  method="POST"
>
    <div className="contact">
    <input type="text" name="username" placeholder="Enter your username"></input>
    <input type="email" name="email" placeholder="Enter your email"></input>
    <textarea name="message" placeholder="Enter your text" cols="35" rows="8"></textarea>
    </div>
    <div className="bttn">
    <button type="submit">Send</button>
    </div>
    </form>
    
    </div>
    </Wrapper>
  );
  }
  const Wrapper = styled.section`
  .contact{
    display: grid;
    justify-content: center;
  }
  input{
    display: block;
    height: 3em;
    margin: 4%;
    width: 100%;
  }
  h1{
    font-size: 4em;
    margin: 2% 0 1% 1%;
  }
  input{
    border: none;
    border-bottom: 2px solid #0015A0;
    font-family: 'Montserrat', sans-serif;
    // margin: 0 2% 2% 2%;
    width: 15%
    font-size: 4em;
    display: grid;
    float: center;
    // font-weight: bold;
    font-size: 1.1em;
}
textarea{
  // font-weight: bold;
  border: solid;
  border: 2px solid #0015A0;
  font-family: 'Montserrat', sans-serif;
  margin:4%;
  font-size: 1.1em;
  width: 100%;
  display: inline-block;
  border-radius: 3%;
}
button{
    cursor: pointer;
    border: solid 2px ;
    background-color: transparent;
    height: 13%;
    width: 7%;
    color: #0015A0;
    font-size: 1.5em;
    margin:0 2% 2% 2%; 
    // box-shadow: 0 0px 6px 0px rgba(0, 0, 0, 0.6);
    text-align: center;
    // display: flex;
    // justify-content: center;
}
.bttn{
  text-align: center;
}
input:hover{
  font-weight: bold;
}
button:hover{
  border: solid;
  border-bottom: solid 2px ;
  text-weight: bold;
  background-color: aliceblue;
  color: #3498db;
  
}
iframe{
  margin: .5% 0%;
}
  `;

  // return <Wrapper></Wrapper>;

export default Contact;

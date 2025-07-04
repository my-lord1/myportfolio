
import styled from "styled-components";



const StyledWrapper = styled.div`

  .container {

    color: white;

    position: relative;

    font-family: sans-serif;

  }



  .container::before,

  .container::after {

    content: "";

    background-color: ;

    position: absolute;

  }



  .container::before {

    border-radius: 50%;

    width: 6rem;

    height: 6rem;

    top: 30%;

    right: 7%;

  }



  .container::after {

    content: "";

    position: absolute;

    height: 3rem;

    top: 8%;

    right: 5%;

    border: 1px solid;

  }



  .container .box {
    width: 45.875em;
    height: 15.875em;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 0, 0, 0.88);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;

  }



  .container .box {
    display: flex;
    flex-direction: ;
    justify-content: space-around;

  }



  .container .box .title {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;

  }



  .container .box div strong {
    display: block;
    margin-bottom: 0.5rem;

  }



  .container .box div p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.1em;

  }



  .container .box div span {

    font-size: 0.7rem;

    font-weight: 300;

  }



  .container .box div span:nth-child(3) {

    font-weight: 500;

    margin-right: 0.2rem;

  }



  .container .box:hover {

    box-shadow: 0px 0px 20px 1px #ffbb763f;

    border: 1px solid rgba(255, 255, 255, 0.454);

  }

`;



export default StyledWrapper;

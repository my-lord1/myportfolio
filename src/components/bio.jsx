import React from 'react';
import twitter1 from '../icons/twitter1.jpeg';
import styled from 'styled-components';

const Bio = () => {
  return (
    <StyledWrapper >
      <div className="flip-card ">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <div className="profile-image">
            <p className= "name">
              just a web developer trying to level my game
            </p>
          </div>
          </div>
          <div className="flip-card-back">
          <div className="profile-image">
              <img src={twitter1} alt="Profile" className='pfp'/>
          </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .flip-card {
    background-color: transparent;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 0.9; 
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 1em;
    backface-visibility: hidden;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .flip-card-front {

  }

  .profile-image {
  width: 100%;
  height: 100%;
  border-radius: 1em;
  overflow: hidden;
}

  .pfp {
    border-radius: 35em;
    fill:rgb(9, 8, 8);
  }

  .name {
    margin-top: 43px;
    font-size: 20px;
    color:rgb(0, 0, 0);
    font-weight: bold;
  }

  .flip-card-back {

    transform: rotateY(180deg);
    padding: 0px;
  }

  .description {
    margin-top: 1px;
    font-size: 5px;
    letter-spacing: 1px;
    color: black;
  }

  .socialbar {
    background-color: transparent;
    border-radius: 3em;
    width: 90%;
    padding: 14px;
    margin-top: 11px;
    margin-left: 10px;
    word-spacing: 24px;
    color: white;
  }

  .socialbar svg {
    transition: 0.4s;
    width: 20px;
    height: 20px;
    color:rgb(0, 0, 0)
  }

  .socialbar svg:hover {
    color: white;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .pfp {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
`;



export default Bio;

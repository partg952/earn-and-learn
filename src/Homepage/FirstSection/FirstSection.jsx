import React from 'react';
import './FirstSection.scss';
import FirstSectionConfetti from '../../Assets/first-section-confetti.svg';
import ComScreen from '../../Assets/com--unscreen.gif';
import CoinAnimation from '../../Assets/coin-animation.gif';
import Frame from '../../Assets/Frame.png';
import Profiles from '../../Assets/giffycanvas.gif'
export const FirstSection = () => {
    return (
      <div id="first-section">
        <div id="image-div">
          <img id='people' src={Frame} alt="" />
          <img id='confetti' src={ FirstSectionConfetti } alt="" />
          <img id='coin-animation' src={CoinAnimation} alt="" />
          <img src={Profiles} id='profiles' alt="" />
        </div>
        <h1>Play with us to get A step closer to your Dreams!</h1>
        <p>
          Excel and earn! Yes, you read it right! Compete with players across
          contests and win exciting cash prizes!
        </p>
        <button>Get Early Access!</button>
      </div>
    );
};

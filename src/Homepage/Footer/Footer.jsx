import React from 'react';
import './Footer.scss';
import LogoWhite from '../../Assets/LogoWhite.svg';
function Footer ()
{
    return (
      <div>
        <footer>
          <img src={LogoWhite} alt="" />
          <p style={{width:'90vw',margin:'2rem auto 2rem auto'}}>Play with us to get a step closer to your dreams!</p>
          <span>
            <a href="#first-section">Home</a>
            <a href='#steps'>About</a>
            <a href='#mobile'>Our Product</a>
            <a href='#sign-up'>Create Account</a>
          </span>
          <hr />
          <h6>© 2021 All Rights Reserved</h6>
        </footer>
      </div>
    );
}

export default Footer;

import React from 'react';
import './Footer.scss';
import LogoWhite from '../../Assets/LogoWhite.svg';
function Footer ()
{
    return (
      <div>
        <footer>
          <img src={LogoWhite} alt="" />
          <p style={{width:'90vw',margin:'0 auto 0 auto'}}>Play with us to get a step closer to your dreams!</p>
          <span>
            <p>Home</p>
            <p>About</p>
            <p>Our Product</p>
            <p>Contact Us</p>
          </span>
          <hr />
          <h6>© 2021 All Rights Reserved</h6>
        </footer>
      </div>
    );
}

export default Footer;

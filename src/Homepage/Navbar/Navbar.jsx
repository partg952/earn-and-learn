import React from "react";
import "./Navbar.scss";
import Logo from "../../Assets/Logo.svg";
import Hamburger from '../../Assets/hamburger.svg'

function Navbar() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="" />
        <span id='span'>
          <img src={Hamburger} id='close-menu' onClick={()=>{
                          document.getElementById("span").style.transform =
                            "translateY(-400px)";

          }}/>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Product</p>
        </span>
        <img src={Hamburger} id='open-menu' onClick={()=>{
            document.getElementById("span").style.transform = 'translateY(0px)';
        }}/>
      </nav>

      <div id="second-blur"></div>
    </div>
  );
}

export default Navbar;

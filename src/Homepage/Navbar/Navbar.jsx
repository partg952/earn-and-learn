import React from "react";
import "./Navbar.scss";
import Logo from "../../Assets/Logo.svg";
import Hamburger from '../../Assets/hamburger.svg'
import ClearIcon from "@material-ui/icons/Clear";
import {useMediaQuery} from 'react-responsive';
import Arrow from '../../Assets/arrow.svg';
function Navbar() {
    const query = useMediaQuery({
        query:'(max-width:650px)'
    })
  return (
    <div>
      <nav>
        <img src={Logo} alt="" />
        {query ? (
          <>
            <span id="span">
              <ClearIcon
                id="close-menu"
                onClick={() => {
                  document.getElementById("span").style.transform =
                    "translateX(400px)";
                }}
              />
              <a href='#first-section'>
                Home <img src={Arrow} alt="" />
              </a>
              <a href='#steps'>
                About Us <img src={Arrow} alt="" />
              </a>
              <a href='#mobile'>
                Our Product <img src={Arrow} alt="" />
              </a>
              <a id='create-account' href='#sign-up'>
                Create Account! <img src={Arrow} alt="" />
              </a>
            </span>
            <img
              src={Hamburger}
              id="open-menu"
              onClick={() => {
                document.getElementById("span").style.transform =
                  "translateX(0px)";
              }}
            />
          </>
        ) : (
          <>
            <span id="span">
              <img
                src={Hamburger}
                id="close-menu"
                onClick={() => {
                  document.getElementById("span").style.transform =
                    "translateX(400px)";
                }}
              />
              <a href='#first-section'>Home</a>
              <a href='#steps'>About Us</a>
              <a href='#mobile'>Our Product</a>
            </span>
            <img
              src={Hamburger}
              id="open-menu"
              onClick={() => {
                document.getElementById("span").style.transform =
                  "translateX(0px)";
              }}
            />
          </>
        )}
      </nav>

      <div id="second-blur"></div>
    </div>
  );
}

export default Navbar;

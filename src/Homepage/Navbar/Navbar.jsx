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
              <p>
                Home <img src={Arrow} alt="" />
              </p>
              <p>
                About Us <img src={Arrow} alt="" />
              </p>
              <p>
                Our Product <img src={Arrow} alt="" />
              </p>
              <p id='create-account'>
                Create Account! <img src={Arrow} alt="" />
              </p>
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
              <p>Home</p>
              <p>About Us</p>
              <p>Our Product</p>
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

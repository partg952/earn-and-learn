import React from "react";
import "./Homepage.scss";
import Navbar from "./Navbar/Navbar";
import { FirstSection } from "./FirstSection/FirstSection";
import MobileSection from "./Mobiles/MobileSection";
import Steps from "./Steps/Steps";
import Review from "../Homepage/Reviews/Review";
import SignUp from "./SignUp/SignUp";
import Footer from "./Footer/Footer";

function Homepage() {
  return (
    <>
      <div style={{ padding: "10px",width:'auto',maxWidth:'1200px',margin:'0 auto',alignItems:'center',justifyContent:'center' }}>
        <Navbar />
        <FirstSection />
        <MobileSection />
        <Steps />
        <Review />
        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;

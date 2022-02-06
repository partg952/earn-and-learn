import React from 'react';
import './Homepage.scss';
import Navbar from './Navbar/Navbar';
import { FirstSection } from './FirstSection/FirstSection';
import MobileSection from './Mobiles/MobileSection';
import Steps from './Steps/Steps';
import Review from '../Homepage/Reviews/Review';
import SignUp from './SignUp/SignUp';
import Footer from './Footer/Footer';

function Homepage() {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <MobileSection />
            <Steps />
            <Review />
            <SignUp />
            <Footer/>
        </div>
    )
}

export default Homepage;

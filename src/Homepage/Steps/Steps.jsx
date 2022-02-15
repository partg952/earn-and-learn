import React from "react";
import "./Steps.scss";
import CompeteAndWin from "../../Assets/compete-and-win.gif";
import WinCashPrize from "../../Assets/win-cash-prize.gif";
import SignUp from "../../Assets/login-step-animation.gif";
import EnterAContest from "../../Assets/enter-a-contest.gif";
import StudyOnline from "../../Assets/study-online.gif";
import Analytics from "../../Assets/analysis.gif";
import SingleUnit from "../../Assets/single-unit.png";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from '@mui/material/StepConnector';
import Arrow from "../../Assets/arrow.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

function Steps() {
  const query = useMediaQuery({
    query: "(min-width:550px)",
  });

  function getPosition(i) {
    if (i % 2 == 0) {
      return "marginRight:'auto'";
    } else {
      return "marginLeft:'auto'";
    }
  }


  

  
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  

  const data = [
    {
      name: "Study For Contest",
      image: StudyOnline,
      details:
        "View the syllabus of the contest to know which chapters yiu need to brush up on and study hard!",
      color: "#3183ED",
    },
    {
      name: "Join a Contest",
      image: EnterAContest,
      details:
        "Pay for the contests you want to join as per your preference of subjects or difficulty",
      color: "#60CC86",
    },
    {
      name: "Compete And win",
      image: CompeteAndWin,
      details:
        "Try to beat others to the finish line by a stellar performance and win amazing redeemable cash prizes!",
      color: "#EA4335",
    },
    {
      name: "Redeem amazing cash prizes",
      image: WinCashPrize,
      details:
        "Win real cash prizes and redeem them for anything you want! Treat yourself for your hard work!",
      color: "#2AB7FF",
    },

    {
      name: "Performance Report",
      image: Analytics,
      details:
        "Get to know where you need more practice, why you might be making mistakes and how to Practice better!",

      color: "#FF8E1D",
    },
  ];

  return (
    <>
      {query ? (
        <div id='steps' style={{width:''}}>
          <h1 style={{padding:'2rem'}}>It’s Just a matter of a few steps <br /> and you too can win!</h1>
          <div
            id="steps-parent"
            onScroll={(e)=>{
              e.preventDefault();
              console.log(e);
            }}
            style={{ overflowX: "scroll"}}
          >
            
            <Stepper>
              {data.map((items, i) => {
                return (
                  <Step alternativeLabel style={{ margin: "10px" }}>
                    <StepLabel>{items.name}</StepLabel>
                    <div className="steps-card">
                      <img src={items.image} alt="" />
                      <h5>{items.name}</h5>
                      <p>{items.details}</p>
                    </div>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        </div>
      ) : (
        <div id='steps' style={{marginTop:'2rem'}}>
          <h1 style={{ fontSize: "2rem" ,padding:'2rem'}}>
            It’s Just a matter of a few steps and{" "} <br />
            <b style={{ color: "orange" }}> you too can win! 🎉</b>
          </h1>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            style={{ height: "300px", marginTop: "50px", width: "100vw" }}
            mousewheel={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            {data.map((items, i) => {
              return (
                <SwiperSlide>
                  <div className="steps-card-mobile">
                    <span style={{ backgroundColor: items.color }}>
                      <p>Step {i + 1}</p>
                    </span>
                    <img src={items.image} alt="" />
                    <h5>{items.name}</h5>
                    <p>{items.details}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default Steps;

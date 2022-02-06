import React from "react";
import "./Steps.scss";
import CompeteAndWin from "../../Assets/compete-and-win.gif";
import WinCashPrize from "../../Assets/win-cash-prize.gif";
import SignUp from "../../Assets/login-step-animation.gif";
import EnterAContest from "../../Assets/enter-a-contest.gif";
import SingleUnit from "../../Assets/single-unit.png";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from '../../Assets/arrow.svg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

function Steps() {
  const query = useMediaQuery({
    query: "(min-width:550px)",
  });

  const data = [
    {
      name: "Create Your Account",
      image: SignUp,
    },
    {
      name: "Join a Contest",
      image: EnterAContest,
    },
    {
      name: "Compete And win",
      image: CompeteAndWin,
    },
    {
      name: "Redeem amazing cash prizes",
      image: WinCashPrize,
    },
  ];

  return (
    <>
      {query ? (
        <div id="steps-parent">
          <h1>It’s Just a matter of a few steps and you too can win!</h1>

          <div id="steps">
            <img src={SingleUnit} id="first-unit" alt="" />
            <img src={SingleUnit} id="second-unit" alt="" />
            {data.map((items) => {
              return (
                <div className="steps-card">
                  <img src={items.image} alt="" />
                  <p>{items.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <h1 style={{ fontSize: "5vw" }}>
            It’s Just a matter of a few steps and{" "}
            <b style={{ color: "orange" }}> you too can win! 🎉</b>
          </h1>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            style={{ height: "300px", marginTop: "50px" }}
            mousewheel={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            {data.map((items) => {
              return (
                <SwiperSlide>
                  <div className="steps-card">
                    <img src={items.image} alt="" />
                    <h5>{items.name}</h5>
                    <p></p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </>
  );
}

export default Steps;

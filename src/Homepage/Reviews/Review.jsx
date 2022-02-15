import React from "react";
import "./Review.scss";
import Commas from "../../Assets/commas.png";
import SingleUnit from "../../Assets/single-unit.png";
import { useMediaQuery } from "react-responsive";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import InfiniteCarousel from "react-leaf-carousel";
function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const query = useMediaQuery({
    query: "(min-width:960px)",
  });
  const reviewData1 = [
    {
      story:
        "During the initial preparation for JEE mains, I was only focusing on coaching classes and textbook learning. This app has helped me in cracking the conventional boring methods of studying and has given me motivation to keep studying to stay on top of the leaderboard and earn a lot of prize money!",
      by: "Rahul",
      preparingFor: "Preparing for JEE Mains 2022",
    },
  ];

  const reviewData2 = [
    {
      story:
        "This app is not only a fun one where we can play and get actual money which we can spend on things outside the app but it also helps me in keeping track of my progress with the syllabus and where I am lacking in preparation. ",
      by: "Alina",
      preparingFor: "Preparing for Bank PO",
    },
    {
      story:
        "I’ve been preparing for GRE for months but came accross this app pretty recently and it has been a great experience. When I win, I get a good amount of prize money that I can redeem and transfer to my bank account and even when I don’t come on the top, I am able to see all the places I’m lacking, why my mistakes happen, which topics need more attention",
      by: "Harleen",
      preparingFor: "Preparing for GRE",
    },
  ];
  const totalReviews = [...reviewData1, ...reviewData2];
  console.log(totalReviews);
  return (
    <>
      {query ? (
        <>
          <div id="review-parent" style={{marginTop:'5rem !important'}}>
            <img id="single-unit" src={SingleUnit} alt="" />
            <div className="review-child">
              <span>
                <div>
                  <img id="comma" src={Commas} alt="" />
                </div>
                <div>
                  <h1>
                    {" "}
                    <b  style={{color:'white'}}>Re</b>ad what people say about us!
                  </h1>
                  <p style={{marginTop:'-20px'}}>Get to know us through these stories</p>
                </div>
              </span>
              {reviewData1.map((items) => (
                <Card
                  by={items.by}
                  story={items.story}
                  preparingFor={items.preparingFor}
                />
              ))}
            </div>
            <div className="review-child">
              {reviewData2.map((items) => (
                <Card
                  by={items.by}
                  story={items.story}
                  preparingFor={items.preparingFor}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="review-child" style={{marginTop:'5rem',textAlign:'left'}}>
          <span>
            <img id="comma" style={{height:'150px',marginBottom:'-20px',marginLeft:'20px'}} src={Commas} alt="" />
            <h1 style={{fontSize:'2rem',padding:'2rem',textAlign:'left'}}>Read what people say about us!</h1>
          </span>
          <p style={{marginTop:'-30px',marginLeft:'25px'}}>Get to know us through these stories</p>
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
            {totalReviews.map((items, i) => {
              return (
                <SwiperSlide>
                  <Card
                    by={items.by}
                    story={items.story}
                    preparingFor={items.preparingFor}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default Review;

import React from "react";
import "./MobileSection.scss";
import phone1 from "../../Assets/phone-1.png";
import phone2 from "../../Assets/phone-2.png";
import phone3 from "../../Assets/phone-3.png";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollDown from '../../Assets/scroll-down.svg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

function MobileSection() {
  const query = useMediaQuery({
    query: "(max-width:1030px)",
  });
  return (
    <>
      {query ? (
        <>
        <img style={{height:'50px'}} src={ScrollDown} alt="" />
        <div id='mobile'>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            style={{height:'500px'}}
            mousewheel={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
            <img src={phone1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={phone2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={phone3} alt="" />
        </SwiperSlide>
            
          </Swiper>
        </div>
        </>
      ) : (
        <div id='mobile'>
          <img src={phone1} alt="" />
          <img src={phone2} alt="" />
          <img src={phone3} alt="" />
        </div>
      )}
</>
  );
}

export default MobileSection;

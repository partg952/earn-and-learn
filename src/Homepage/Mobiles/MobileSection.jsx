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
  const query2 = useMediaQuery({
    query:"(max-width:470px)"
  })
  const mobileSection = {
    height:'600px',
    margin:'0'
  }
  return (
    <>
      {query2 && <img style={{ height: "50px" }} src={ScrollDown} alt="" />}
      {query ? (
        <>
          <div id="mobile" style={{ margin: "30px auto 0 auto" }}>
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              style={{ height: "80vh"}}
              mousewheel={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={phone1} style={{ margin: "0 auto 0 -20px" }} alt="" />
              </SwiperSlide>
              <SwiperSlide style={{ marginTop: "20px" }}>
                <img src={phone2} style={{ margin: "0 auto 0 -20px" }} alt="" />
              </SwiperSlide>
              <SwiperSlide lide style={{ marginTop: "20px" }}>
                <img src={phone3} style={{ margin: "0 auto 0 -60px" }} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : (
        <div id="mobile" style={{ marginTop: "300px" }}>
          <img style={mobileSection} src={phone1} alt="" />
          <img style={mobileSection}  id="middle-phone" src={phone2} alt="" />
          <img style={mobileSection} src={phone3} alt="" />
        </div>
      )}
    </>
  );
}

export default MobileSection;

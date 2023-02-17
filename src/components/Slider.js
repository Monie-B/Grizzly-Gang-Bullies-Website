// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/litters.css"

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="sliderContainer">
        <Swiper
          autoHeight={true}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src="IMG_3822.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4003.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4004.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4005.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4006.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4007.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4008.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4009.JPG" alt="puppy" /></SwiperSlide>
          <SwiperSlide><img src="IMG_4010.JPG" alt="puppy" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

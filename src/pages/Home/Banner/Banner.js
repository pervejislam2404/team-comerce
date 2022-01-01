import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Banner.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);
const Banner = () => {
  return (
    <div className="h-100vh">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className="mySwiper h-100vh"
      >
        <SwiperSlide>
          <img
            className="img-fluid h-500px"
            src="https://image.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-vector/online-shopping-isometric-concept-shopping-cart_107791-317.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-vector/banner-online-offline-system_107791-2042.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

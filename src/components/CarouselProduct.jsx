import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Thumbs } from "swiper";

const CarouselProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={false}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        <SwiperSlide>
          <img
            src="https://cf.shopee.co.id/file/07c914efbaf57c4eb3f7c4cafb9fa5f2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cf.shopee.co.id/file/fcc9270d14d6e7582cf0b663f9027456"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cf.shopee.co.id/file/6de53d2ad0c72fa91796cd3f49bddfb5"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
      >
        <SwiperSlide>
          <img
            src="https://cf.shopee.co.id/file/07c914efbaf57c4eb3f7c4cafb9fa5f2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cf.shopee.co.id/file/fcc9270d14d6e7582cf0b663f9027456"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cf.shopee.co.id/file/6de53d2ad0c72fa91796cd3f49bddfb5"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselProduct;

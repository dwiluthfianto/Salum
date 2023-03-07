import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import svg from "../features/svg/DrawKit-Vector-Illustration-ecommerce-02.svg";
import svg2 from "../features/svg/DrawKit-Vector-Illustration-ecommerce-07.svg";
import svg3 from "../features/svg/DrawKit-Vector-Illustration-ecommerce-09.svg";
const Banner = () => {
  return (
    <div className="mt-8">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay
        spaceBetween={50}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <button className="prev z-50 inline-flex bg-gray-100 border-none w-10 h-10 left-2 rounded-full justify-center items-center text-xl absolute top-[50%] outline-none cursor-pointer disabled:bg-gray-50 focus:outline-none">
          <span className="icon flex items-center">
            <i className="ri-arrow-left-s-line ri-xl"></i>
          </span>
        </button>
        <button className="next z-50 bg-gray-100 inline-flex border-none w-10 h-10 right-2 rounded-full justify-center items-center text-xl absolute top-[50%] outline-none cursor-pointer disabled:bg-gray-50 focus:outline-none">
          <span className="icon flex items-center">
            <i className="ri-arrow-right-s-line ri-xl"></i>
          </span>
        </button>
        <SwiperSlide>
          <div className="grid grid-cols-1 tablet:grid-cols-2 items-center">
            <div className="tablet:p-16 space-y-3">
              <p className="font-bold text-3xl text-center tablet:text-left">
                Berbelanja Lebih Mudah, Dukung UMKM Lokal!
              </p>
            </div>
            <img src={svg} alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 tablet:grid-cols-2 items-center">
            <div className="tablet:p-16 space-y-3">
              <p className="font-bold text-3xl text-center tablet:text-left">
                Temukan Keunikan Produk UMKM Lokal Hanya di Sini!
              </p>
            </div>
            <img src={svg3} alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 tablet:grid-cols-2 items-center">
            <div className="tablet:p-16 space-y-3">
              <p className="font-bold text-3xl text-center tablet:text-left">
                Dukung Pertumbuhan UMKM Lokal dengan Belanja di Salum!
              </p>
            </div>
            <img src={svg2} alt="" className="" />
          </div>
        </SwiperSlide>

        <div className="swiper-pagination absolute left-[50%] bottom-2 translate-x-[-50%] z-10 w-auto"></div>
      </Swiper>
    </div>
  );
};

export default Banner;

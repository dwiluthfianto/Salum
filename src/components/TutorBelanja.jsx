import React from "react";
import imgbg from "../features/img/bg-values.76d25f0.png";
import svg12 from "../features/svg/DrawKit-Vector-Illustration-ecommerce-12.svg";
import svg16 from "../features/svg/DrawKit-Vector-Illustration-ecommerce-16.svg";
import svg17 from "../features/svg/DrawKit-Vector-Illustration-ecommerce-17.svg";

const TutorBelanja = () => {
  return (
    <div className="relative flex flex-col p-3 laptop:flex-row laptop:p-0">
      <img src={imgbg} alt="" className="z-0 mx-auto hidden laptop:block" />
      <p className="text-xl font-bold laptop:absolute  laptop:text-4xl laptop:font-medium">
        BELANJA MUDAH
      </p>
      <div className="flex laptop:absolute items-center laptop:left-80 laptop:top-32">
        <div className="w-36">
          <img src={svg12} alt="" />
        </div>
        <div className="w-52">
          <p className="text-green-600 font-bold laptop:text-6xl mb-2">
            Akses Salum{" "}
          </p>
          <label className="text-sm font-medium">
            Kunjungi salum dimanapun kapanpun selama terhubung dengan jaringan
          </label>
        </div>
      </div>
      <div className="flex laptop:absolute items-center laptop:right-32 laptop:top-[500px]">
        <div className="w-36">
          <img src={svg17} alt="" />
        </div>
        <div className="w-52">
          <p className="text-green-600 font-bold laptop:text-6xl mb-2">
            Masukkan Keranjang
          </p>
          <label className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            tempore numquam
          </label>
        </div>
      </div>
      <div className="flex laptop:absolute items-center laptop:left-12 laptop:bottom-60">
        <div className="w-36">
          <img src={svg16} alt="" />
        </div>
        <div className="w-52">
          <p className="text-green-600 font-bold laptop:text-6xl mb-2">
            Siap Kirim
          </p>
          <label className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            tempore numquam
          </label>
        </div>
      </div>
    </div>
  );
};

export default TutorBelanja;

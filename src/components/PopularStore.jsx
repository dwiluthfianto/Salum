import React from "react";
import { Link } from "react-router-dom";

const PopularStore = () => {
  return (
    <div className="py-5 laptop:px-0 space-y-5">
      <span className="flex flex-col laptop:flex-row laptop:items-center laptop:gap-2 mb-5">
        <p className="font-bold text-2xl  laptop:text-3xl text-gray-500">
          Popular Store
        </p>
        <p className="mt-3 text-gray-500">
          Temukan lebih dari 1200+ bisnis lokal
        </p>
      </span>
      <div class="mt-4 grid gap-4 phone:grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-6">
        <Link>
          <div className="flex  w-40 h-44 laptop:w-44 laptop:h-48 rounded-lg bg-white items-center text-center justify-center p-5">
            <img
              src="https://img.ws.mms.shopee.co.id/fd190b1571647108507c422d04cba220"
              alt=""
            />
          </div>
        </Link>
        <div className="flex  w-40 h-44 laptop:w-44 laptop:h-48 rounded-lg bg-white items-center text-center justify-center p-5 cursor-pointer">
          <img
            src="https://cf.shopee.co.id/file/106d34f29ba5d9aac0a9defd617f5ae7"
            alt=""
          />
        </div>
        <div className="flex  w-40 h-44 laptop:w-44 laptop:h-48 rounded-lg bg-white items-center text-center justify-center  p-5 cursor-pointer">
          <img
            src="https://down-aka-id.img.susercontent.com/3bfcda3c0d784d565c45e28bd1c8d905_tn"
            alt=""
          />
        </div>
        <div className="flex  w-40 h-44 laptop:w-44 laptop:h-48 rounded-lg bg-white items-center text-center justify-center  p-5 cursor-pointer">
          <img
            src="https://down-aka-id.img.susercontent.com/d2e1d40d6966b758da8ad8a7132d4470_tn"
            alt=""
          />
        </div>
        <div className="flex  w-40 h-44 laptop:w-44 laptop:h-48 rounded-lg bg-white items-center text-center justify-center p-5 cursor-pointer">
          <img
            src="https://down-aka-id.img.susercontent.com/sg-11134004-23010-gu1nt0wc03lv24_tn.webp"
            alt=""
          />
        </div>
        <div className="flex  w-40 h-44 laptop:w-44 laptop:h-48 rounded-lg bg-white items-center text-center justify-center p-5 cursor-pointer">
          <img
            src="https://www.karyaperempuan.id/public/uploads/all/Zjk9y0ILIqST9Wwu9vXYdzy3lCPcmyf0vOTU38kN.png"
            alt=""
          />
        </div>
      </div>
      <span className="flex items-center justify-center gap-2 text-green-600 cursor-pointer">
        See all stores
        <i class="ri-arrow-right-line"></i>
      </span>
    </div>
  );
};

export default PopularStore;

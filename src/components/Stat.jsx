import React from "react";
import svg8 from "../features/svg/DrawKit-Vector-Illustration-ecommerce-08.svg";

const Stat = () => {
  return (
    <div className="flex flex-col p-3 laptop:p-0 laptop:grid laptop:grid-cols-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl tablet:text-3xl font-bold">UMKM Kota Salatiga</p>
        <div className="flex flex-col tablet:flex-wrap tablet:flex-row gap-5 tablet:gap-2">
          <div className="group flex items-center gap-3 p-5 rounded-md hover:shadow-md transition-all">
            <span className="rounded-full shadow-md w-8 h-8 flex items-center text-center justify-center group-hover:bg-green-600 group-hover:text-white">
              <i class="ri-shield-user-line ri-lg"></i>
            </span>
            <div>
              <p className="font-semibold ">UMKM Binaan</p>
              <label className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-5 rounded-md hover:shadow-md transition-all">
            <span className="rounded-full shadow-md w-8 h-8 flex items-center text-center justify-center group-hover:bg-green-600 group-hover:text-white">
              <i class="ri-home-smile-2-line ri-lg"></i>
            </span>
            <div>
              <p className="font-semibold ">UMKM Jasa</p>
              <label className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-5 rounded-md hover:shadow-md transition-all">
            <span className="rounded-full shadow-md w-8 h-8 flex items-center text-center justify-center group-hover:bg-green-600 group-hover:text-white">
              <i class="ri-rocket-2-line ri-lg"></i>
            </span>
            <div>
              <p className="font-semibold ">UMKM Aktif</p>
              <label className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-5 rounded-md hover:shadow-md transition-all">
            <span className="rounded-full shadow-md w-8 h-8 flex items-center text-center justify-center group-hover:bg-green-600 group-hover:text-white">
              <i class="ri-building-line ri-lg"></i>
            </span>
            <div>
              <p className="font-semibold ">UMKM Produksi</p>
              <label className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-5 rounded-md hover:shadow-md transition-all">
            <span className="rounded-full shadow-md w-8 h-8 flex items-center text-center justify-center group-hover:bg-green-600 group-hover:text-white">
              <i class="ri-star-line ri-lg"></i>
            </span>
            <div>
              <p className="font-semibold ">UMKM Ekonomi Kreatif</p>
              <label className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-5 rounded-md hover:shadow-md transition-all">
            <span className="rounded-full shadow-md w-8 h-8 flex items-center text-center justify-center group-hover:bg-green-600 group-hover:text-white">
              <i class="ri-store-3-line ri-lg"></i>
            </span>
            <div>
              <p className="font-semibold ">UMKM Perdagangan</p>
              <label className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden laptop:block">
        <img src={svg8} alt="" />
      </div>
    </div>
  );
};

export default Stat;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const keyPressHandler = () => {
    navigate("/store/products");
  };
  return (
    <div className="shadow-md sticky top-0 bg-white z-50 px-2">
      <div className="flex flex-col gap-3 max-w-6xl mx-auto py-2 ">
        <div className="flex justify-between items-center gap-2">
          {/* Logo */}
          <Link to="/store">
            <div className="hidden laptop:flex text-xl gap-2 font-bold text-green-600">
              <i class="ri-shopping-bag-3-line"></i>
              <p>SALUM</p>
            </div>
          </Link>
          {/* search */}
          <div className="flex border border-gray-400 rounded-md pl-4 pr-2 py-2 gap-2  w-full tablet:max-w-lg justify-between">
            {/* search box */}
            <div className="flex items-center gap-2 w-full">
              <i class="ri-search-2-line text-gray-400"></i>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-full outline-none"
                onKeyDown={keyPressHandler}
              />
            </div>
            <span className="w-[1px] h-6 bg-gray-400"></span>
            <span className="flex justify-center items-center gap-2">
              All
              <i class="ri-arrow-down-s-line"></i>
            </span>
          </div>
          {/* wishlist, cart, dan avatar */}
          <div className="flex gap-3 items-center">
            <span className="flex items-center cursor-pointer">
              <i class="ri-heart-3-line ri-lg"></i>
            </span>
            <Link to="/store/cart">
              <span className="flex items-center relative">
                <span className="absolute top-[-8px] right-[-8px] px-[6px] rounded-full bg-red-500 text-white text-xs">
                  2
                </span>
                <i class="ri-shopping-cart-2-line ri-lg"></i>
              </span>
            </Link>
            <span className="flex items-center cursor-pointer">
              <i class="ri-notification-3-line ri-lg"></i>
            </span>
            <span className="w-6 h-6 bg-red-300 rounded-2xl"></span>
          </div>
        </div>
        {/* garis pemisah */}
        <span className="w-full h-[1px] bg-gray-200 hidden tablet:block"></span>
        {/* kategori barang */}
        <div className="hidden tablet:block">
          <ul className="flex gap-6 ">
            <li className="cursor-pointer">Kuliner</li>
            <li className="cursor-pointer">Fashion Pria</li>
            <li className="cursor-pointer">Fashion Wanita</li>
            <li className="cursor-pointer">Komputer & Laptop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

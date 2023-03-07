import React from "react";
import CarouselProduct from "../components/CarouselProduct";
import Review from "../components/Review";

const Product = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col p-3 desktop:grid desktop:p-0 desktop:grid-cols-3 gap-5">
        <div className="">
          <CarouselProduct />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <div>
            <p className="font-bold text-2xl">
              Rockercrown Tshirt Black 22NV-27
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <p>4.3</p>
            <ul className="flex ">
              <li>
                <i className="ri-star-fill text-yellow-500"></i>
              </li>
              <li>
                <i className="ri-star-fill text-yellow-500"></i>
              </li>
              <li>
                <i className="ri-star-fill text-yellow-500 "></i>
              </li>
              <li>
                <i className="ri-star-fill text-yellow-500"></i>
              </li>
              <li>
                <i className="ri-star-half-fill text-yellow-500 "></i>
              </li>
            </ul>
            <p></p>
          </div>
          <div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium ducimus iste veniam eum, sequi quasi laudantium
              perferendis dolor non facere magni in commodi aperiam voluptate
              architecto accusamus labore ad recusandae?
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl font-semibold">Rp 360.000</p>
            <p className="text-sm text-red-600 line-through">Rp 420.000</p>
          </div>
          <div>
            <span className="font-medium">Warna</span>
            <div className="flex gap-4 mt-2">
              <span className="bg-black w-6 h-6 rounded-full cursor-pointer"></span>
              <span className="bg-white border border-gray-400 w-6 h-6 rounded-full cursor-pointer"></span>
              <span className="bg-red-600 w-6 h-6 rounded-full cursor-pointer"></span>
              <span className="bg-green-500 w-6 h-6 rounded-full cursor-pointer"></span>
            </div>
          </div>
          <div>
            <span className="font-medium ">Ukuran</span>
            <div className="flex gap-4 mt-2">
              <div className="w-8 border border-gray-400 text-center rounded-md cursor-pointer">
                S
              </div>
              <div className="w-8 border border-gray-400 text-center rounded-md cursor-pointer">
                M
              </div>
              <div className="w-8 border border-gray-400 text-center rounded-md cursor-pointer">
                L
              </div>
              <div className="w-8 border border-gray-400 text-center rounded-md cursor-pointer">
                XL
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5 border border-gray-300 rounded-xl p-5 desktop:m-6 h-fit w-full">
          <div>
            <p className=" font-medium">Total Stock: 1234</p>
            <div className="flex items-center border border-gray-300 rounded-md justify-between overflow-hidden">
              <div className="bg-slate-100 flex items-center text-center justify-center font-medium text-gray-600 w-11 h-10 text-xl cursor-pointer">
                -
              </div>
              <span>1</span>
              <div className="bg-green-600 flex items-center text-center justify-center font-medium text-white w-11 h-10 text-xl cursor-pointer">
                +
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Price</span>
            <p className="font-medium">Rp 360.000</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-green-600 rounded-lg text-white font-medium py-2 hover:bg-green-700">
              Add To Chart
            </button>
            <button className="ring-2 ring-green-600 ring-inset rounded-lg text-green-600 font-medium py-2 hover:ring-green-700 hover:text-green-600">
              Buy Now
            </button>
          </div>
          <div className="flex justify-center gap-10 border-t-[1px] py-2 font-medium">
            <span className="flex gap-2 items-center cursor-pointer">
              <i class="ri-message-3-line ri-lg"></i> Chat
            </span>
            <span className="w-[1px] h-6 bg-gray-300 "></span>
            <span className="flex gap-2 items-center cursor-pointer">
              <i class="ri-share-line ri-lg"></i>Share
            </span>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default Product;

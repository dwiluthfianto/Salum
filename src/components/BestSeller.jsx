import React from "react";
import Card from "./Card";
import svg from "../features/svg/DrawKit-Vector-Illustration-ecommerce-11.svg";
import { Link } from "react-router-dom";
import barang from "./Barang";

const BestSeller = () => {
  return (
    <div className="grid grid-cols-1 laptop:grid-cols-3 gap-5">
      <div className="hidden  laptop:flex flex-col gap-5 py-12 px-4 bg-green-600  rounded-lg">
        <p className="font-bold text-3xl text-white">
          Explore Salatiga Best <br /> Selling Product
        </p>
        <span className="text-white">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
          Distinctio ea ad excepturi, quas eveniet aut eum sapiente dolores
        </span>
        <img src={svg} alt="" />
      </div>
      <div className="col-span-2">
        <div className="flex justify-between">
          <p className="font-bold text-2xl laptop:text-3xl">
            Bestseller Products
          </p>
          <span className="flex text-sm laptop:text-md items-center justify-center gap-2 text-green-600 cursor-pointer">
            See More <i class="ri-arrow-right-line"></i>
          </span>
        </div>
        {/* card product */}
        <ul class="mt-4 grid gap-4 phone:grid-cols-2 tablet:grid-cols-4">
          {barang.map((brg) => (
            <li>
              <Link to="/store/product">
                <Card
                  key={brg.id}
                  img={brg.img}
                  title={brg.title}
                  price={brg.price}
                  rating={brg.rating}
                  priceDiskon={brg.priceDiskon}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestSeller;

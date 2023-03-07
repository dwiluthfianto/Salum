import React from "react";
import { Link } from "react-router-dom";
import hero from "../features/svg/DrawKit-Vector-Illustration-ecommerce-01.svg";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto tablet:px-12 laptop:px-16 max-w-7xl laptop:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl laptop:text-6xl laptop:max-w-7xl">
                  Berbelanja di E-Commerce UMKM{" "}
                  <br className="hidden laptop:block" />
                  Dapatkan Kualitas Terbaik{" "}
                  <br className="hidden laptop:block" /> dari Produk Lokal!
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                  Dukung pertumbuhan usaha kecil dan menengah di Indonesia serta
                  ikut memajukan perekonomian Indonesia secara keseluruhan.
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg phone:mt-0">
                    <Link to="/store">
                      <button className="px-3 py-2 tablet:px-5 tablet:py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 laptop:px-10 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Mulai Belanja
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="intro">
            <div className="flex flex-col items-center justify-center mx-auto rounded-lg laptop:px-10 max-w-7xl">
              <img
                className="object-cover object-center w-full rounded-xl"
                alt="hero"
                src={hero}
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;

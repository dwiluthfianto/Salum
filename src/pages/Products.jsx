import React from "react";
import { Link } from "react-router-dom";
import barang from "../components/Barang";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Products = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 tablet:grid-cols-4">
        <div className="py-8 hidden tablet:block">
          <Filter />
        </div>
        <div className="col-span-3">
          <section>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <header>
                <p className="text-xl ">
                  Search result for{" "}
                  <b className="text-xl  text-gray-900 sm:text-3xl">"Random"</b>
                </p>
              </header>

              <div className="mt-8  items-center justify-between phone:flex tablet:hidden">
                <div className="flex divide-x divide-gray-100 rounded border border-gray-100">
                  <button className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                    <i className="ri-list-check"></i>
                  </button>

                  <button className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                    <i className="ri-menu-line"></i>
                  </button>
                </div>

                <div>
                  <label for="SortBy" className="sr-only">
                    SortBy
                  </label>

                  <select
                    id="SortBy"
                    className="h-10 rounded border-gray-300 text-sm"
                  >
                    <option>Sort By</option>
                    <option value="Title, DESC">Title, DESC</option>
                    <option value="Title, ASC">Title, ASC</option>
                    <option value="Price, DESC">Price, DESC</option>
                    <option value="Price, ASC">Price, ASC</option>
                  </select>
                </div>
              </div>
              <ul class="mt-4 grid gap-4 phone:grid-cols-2 laptop:grid-cols-4">
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
              <ul class="mt-4 grid gap-4 phone:grid-cols-2 laptop:grid-cols-4">
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
              <ol class="flex justify-center gap-1 text-xs font-medium mt-5">
                <li>
                  <a className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
                    <span class="sr-only">Prev Page</span>
                    <i class="ri-arrow-left-s-line"></i>
                  </a>
                </li>

                <li>
                  <a className="block h-8 w-8 rounded border border-gray-100 text-center leading-8">
                    1
                  </a>
                </li>

                <li class="block h-8 w-8 rounded border-green-600 bg-green-600 text-center leading-8 text-white">
                  2
                </li>

                <li>
                  <a className="block h-8 w-8 rounded border border-gray-100 text-center leading-8">
                    3
                  </a>
                </li>

                <li>
                  <a className="block h-8 w-8 rounded border border-gray-100 text-center leading-8">
                    4
                  </a>
                </li>

                <li>
                  <a className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
                    <span class="sr-only">Next Page</span>
                    <i class="ri-arrow-right-s-line"></i>
                  </a>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;

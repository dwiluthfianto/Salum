import React from "react";
import Cart from "../components/Cart";

const Carts = () => {
  return (
    <div className="bg-slate-50 py-5">
      <div className="max-w-6xl mx-auto laptop:p-0">
        <div className="flex justify-between p-2 items-center">
          <p className="text-2xl font-semibold mb-3">Keranjang</p>
          <span class="inline-flex tablet:hidden divide-x overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
              title="Edit Product"
            >
              <i className="ri-heart-3-line"></i>
            </button>

            <button
              className="inline-block p-3 text-red-600 hover:bg-gray-50 focus:relative"
              title="Delete Product"
            >
              <i className="ri-delete-bin-line"></i>
            </button>
          </span>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Carts;

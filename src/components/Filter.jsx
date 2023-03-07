import React from "react";

const Filter = () => {
  return (
    <div className="rounded-lg shadow-lg p-5">
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold">Kategori</p>
        <div className="flex gap-3 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <p>Shirt</p>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <p>Pants</p>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <p>Snack</p>
        </div>
        <div className="flex gap-3 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <p>Dress</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex flex-col gap-5">
        <p className="text-xl font-bold">Harga</p>
        <div className="flex justify-between text-sm">
          <p>Harga tertinggi Rp 300.000</p>
          <p className="cursor-pointer text-red-600">Reset</p>
        </div>
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <p>Rp.</p>
            <input
              type="number"
              placeholder="From"
              className=" w-full border-gray-200 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <p>Rp.</p>
            <input
              type="number"
              placeholder="To"
              className=" w-full border-gray-200 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

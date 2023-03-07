import React from "react";

const Cart = () => {
  return (
    <div className="col-span-2 flex flex-col gap-4">
      <div className=" py-3 bg-white rounded-lg">
        <div className="px-5">
          <div className="flex gap-2 items-center border-b-[1px]">
            <input type="checkbox" checked className="tablet:w-5 tablet:h-5" />
            <div className="w-12 h-12">
              <img
                src="https://img.ws.mms.shopee.co.id/fd190b1571647108507c422d04cba220"
                alt=""
              />
            </div>
            <p className="font-bold text-md tablet:text-lg">
              RockerCrown Official
            </p>
          </div>

          <div className="flex items-center justify-between pl-5 py-3 border-b-[1px]">
            <div className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" checked className="w-5 h-5" />
              <div className="w-14 h-14">
                <img
                  src="https://cf.shopee.co.id/file/07c914efbaf57c4eb3f7c4cafb9fa5f2"
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-sm tablet:text-base font-medium">
                  Rockercrown Tshirt Black 22NV-27
                </span>
                <label className="text-xs">BLACK - XL</label>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-col tablet:flex-row items-center gap-2">
                <div className="flex gap-2">
                  <div className="border border-gray-200 rounded-md w-8 text-center text-2xl cursor-pointer">
                    <span>-</span>
                  </div>
                  <div className="border border-gray-200 rounded-md w-8 flex items-center justify-center">
                    <span>1</span>
                  </div>
                  <div className="border border-gray-200 rounded-md w-8 text-center text-2xl cursor-pointer">
                    <span>+</span>
                  </div>
                </div>
                <span className="text-sm tablet:text-base font-medium">
                  Rp 360.000
                </span>
              </div>
              <div className="tablet:flex gap-3 text-sm hidden">
                <p className="cursor-pointer">Move to favorites</p>
                <p className="text-red-400 cursor-pointer">Delete product</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pl-5 py-3 border-b-[1px]">
            <div className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" checked className="w-5 h-5" />
              <div className="w-14 h-14">
                <img
                  src="https://cf.shopee.co.id/file/07c914efbaf57c4eb3f7c4cafb9fa5f2"
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-sm tablet:text-base font-medium">
                  Rockercrown Tshirt Black 22NV-27
                </span>
                <label className="text-xs">BLACK - XL</label>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-col tablet:flex-row items-center gap-2">
                <div className="flex gap-2">
                  <div className="border border-gray-200 rounded-md w-8 text-center text-2xl cursor-pointer">
                    <span>-</span>
                  </div>
                  <div className="border border-gray-200 rounded-md w-8 flex items-center justify-center">
                    <span>1</span>
                  </div>
                  <div className="border border-gray-200 rounded-md w-8 text-center text-2xl cursor-pointer">
                    <span>+</span>
                  </div>
                </div>
                <span className="text-sm tablet:text-base font-medium">
                  Rp 360.000
                </span>
              </div>
              <div className="tablet:flex gap-3 text-sm hidden">
                <p className="cursor-pointer">Move to favorites</p>
                <p className="text-red-400 cursor-pointer">Delete product</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between pl-5 py-8 text-sm tablet:text-base">
            <span>
              <b className="cursor-pointer">+ Add New Product </b> from
              Rockercrown Official
            </span>
            <span className="font-medium">
              Total from this Store: Rp 360.000
            </span>
          </div>
        </div>
        <div className="border-t-[1px] px-5 py-4 flex flex-col tablet:flex-row gap-2 justify-between">
          <div className="border border-gray-400 rounded-md py-2 px-3 flex gap-3 items-center">
            <input
              type="text"
              className="outline-none border-none w-full text-sm "
              placeholder="Promo Code"
            />
            <span className="text-green-600 font-semibold cursor-pointer">
              APPLY
            </span>
          </div>
          <div className="flex gap-5 items-center justify-between">
            <span className="text-sm text-gray-600 font-medium hidden tablet:block">
              2 Product Selected
            </span>
            <span className="flex gap-2 items-center">
              <p className="font-medium">Rp 360.000</p>
              <p className="text-xs text-gray-600">+ Delivery & Taxes</p>
            </span>
            <button className="bg-green-600 p-2 rounded-md text-white font-medium flex gap-2 hover:bg-green-700">
              Payment
              <i class="ri-wallet-3-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

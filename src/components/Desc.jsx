import React from "react";

const Desc = () => {
  return (
    <div className="flex flex-col tablet:grid tablet:grid-cols-2 gap-5 p-3 tablet:p-0">
      <div>
        <div className="p-[75px 0] m-[0 auto] w-full">
          <div className="flex flex-row w-full h-[30vh] tablet:h-[40vh] wrap-effect">
            <div className="flex-1 h-full bg-center bg-cover bg-no-repeat transition-all ease-in duration-700 hover:flex-[5] item"></div>
            <div className="flex-1 h-full bg-center bg-cover bg-no-repeat transition-all ease-in duration-700 hover:flex-[5] item"></div>
            <div className="flex-1 h-full bg-center bg-cover bg-no-repeat transition-all ease-in duration-700 hover:flex-[5] item"></div>
            <div className="flex-1 h-full bg-center bg-cover bg-no-repeat transition-all ease-in duration-700 hover:flex-[5] item"></div>
          </div>
        </div>
      </div>
      <div className="p-10 tablet:p-16 items-center flex flex-col gap-3 justify-center">
        <p className="font-bold text-3xl">
          Beli Produk Asal Salatiga Tanpa Perlu ke Salatiga
        </p>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nulla
          facere possimus dolorum voluptates quam aliquam nihil esse magni, eos
          similique quis dolorem! Obcaecati illo doloremque maxime dolorum
          blanditiis autem.
        </span>
      </div>
    </div>
  );
};

export default Desc;

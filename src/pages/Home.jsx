import React from "react";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import PopularStore from "../components/PopularStore";
// import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <div>
        <div className="max-w-6xl mx-auto px-3 laptop:px-0">
          <Banner />
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-3 laptop:px-0">
          <PopularStore />
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto px-3 py-6 laptop:px-0">
          <BestSeller />
        </div>
      </div>
    </div>
  );
};

export default Home;

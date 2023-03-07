import React from "react";
import Desc from "../components/Desc";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavLand from "../components/NavLand";
import Stat from "../components/Stat";
import TutorBelanja from "../components/TutorBelanja";

const Landing = () => {
  return (
    <div>
      <div className="shadow-sm sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto ">
          <NavLand />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-rows-1">
        <div>
          <Hero />
        </div>
        <div>
          <Stat />
        </div>
        <div className="mt-20">
          <Desc />
        </div>
        <div className="mt-5 tablet:mt-20">
          <TutorBelanja />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

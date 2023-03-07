import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 max-w-6xl mx-auto py-2 border-t-2 text-center laptop:text-left p-3 laptop:p-0 mb-5 mt-4">
      <div className="grid grid-rows-1 laptop:grid-cols-5 grid-flow-row gap-4 text-gray-600 mt-5">
        <div className="laptop:col-span-2 flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolore illum laudantium aperiam quos voluptate numquam inventore
            atque magnam fugiat?
          </p>
          <ul className="flex gap-6 justify-center laptop:justify-start">
            <li>
              <i class="ri-facebook-circle-fill ri-xl"></i>
            </li>
            <li>
              <i class="ri-instagram-line ri-xl"></i>
            </li>
            <li>
              <i class="ri-twitter-fill ri-xl"></i>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-5">Services</p>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-5">About</p>
          <ul>
            <li>About</li>
            <li>History</li>
            <li>Our Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-5">Support</p>
          <ul>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Live Chat</li>
          </ul>
        </div>
      </div>
      <span className="w-full h-[1px] bg-gray-200"></span>
      <div>
        <p class="text-center text-xs leading-relaxed text-gray-500">
          © Salum 2023. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

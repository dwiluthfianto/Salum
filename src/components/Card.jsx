import React from "react";

const Card = (props) => {
  return (
    <div className="w-40 laptop:w-44 h-64 rounded-lg shadow-md">
      <div className="h-40 overflow-hidden rounded-md">
        <img src={props.img} alt="" />
      </div>
      <div className="p-2">
        <p className=" font-medium truncate">{props.title}</p>

        {/* rating */}
        <div className="flex gap-1 items-center">
          <p className="text-xs">{props.rating}</p>
          <ul className="flex ">
            <li>
              <i className="ri-star-fill text-yellow-500 ri-xs"></i>
            </li>
            <li>
              <i className="ri-star-fill text-yellow-500 ri-xs"></i>
            </li>
            <li>
              <i className="ri-star-fill text-yellow-500 ri-xs"></i>
            </li>
            <li>
              <i className="ri-star-fill text-yellow-500 ri-xs"></i>
            </li>
            <li>
              <i className="ri-star-half-fill text-yellow-500 ri-xs"></i>
            </li>
          </ul>
        </div>
        <label className="font-bold text-sm">{props.priceDiskon}</label>
        <label> </label>
        <label className="text-xs line-through text-red-400">
          {props.price}
        </label>
      </div>
    </div>
  );
};

export default Card;

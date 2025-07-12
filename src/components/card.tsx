import React from "react";
import { AiFillFire } from "react-icons/ai";

import {
  UpArrowLarge,
  DownArrowLarge,
  UpArrowSmall,
  DownArrowSmall,
} from "../assets/Icons";

interface ProductivityCardProps {
  title: string;
  percentage: string;
  change: string;
  changeDirection: "up" | "down" | "fire";
}

const ProductivityCard: React.FC<ProductivityCardProps> = ({
  title,
  percentage,
  change,
  changeDirection,
}) => {
  const isUp = changeDirection === "up";
  const changeColor = isUp ? "text-green-600" : "text-red-400";

  const icon =
    changeDirection === "up" ? (
      UpArrowLarge
    ) : changeDirection === "down" ? (
      DownArrowLarge
    ) : (
      <AiFillFire style={{ fill: "#ef4444" }} className="w-4 h-8" />
    );

  return (
    <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md rounded-xl h-28 w-44 p-3 shadow-md text-white text-appear">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-xl font-extrabold text-black">{percentage}</p>
        </div>
        <div
          className={`mt-4 p-1 rounded-md  ${
            isUp ? "bg-green-600/20" : "bg-red-400/20"
          } `}
        >
          {icon}
        </div>
      </div>
      <p className="text-[11px] font-medium ">
        <span className={changeColor}>
          {isUp ? UpArrowSmall : DownArrowSmall} {change}
        </span>{" "}
        <span className="text-black font-extrabold">vs Last Month</span>
      </p>
    </div>
  );
};

export default ProductivityCard;

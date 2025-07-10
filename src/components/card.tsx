import React from "react";

interface ProductivityCardProps {
  title: string;
  percentage: string;
  change: string;
  changeDirection: "up" | "down";
}

const ProductivityCard: React.FC<ProductivityCardProps> = ({
  title,
  percentage,
  change,
  changeDirection,
}) => {
  const isUp = changeDirection === "up";
  const changeColor = isUp ? "text-green-400" : "text-red-400";
  const icon = isUp ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-green-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7 7 7M12 3v18"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7-7-7M12 21V3"
      />
    </svg>
  );

  return (
    <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md rounded-xl h-28 w-48 p-3 shadow-md text-white">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-xl font-extrabold text-black">{percentage}</p>
        </div>
        <div
          className={`p-1 rounded-md bg-${isUp ? "green" : "red"}-500/20 h-15`}
        >
          {icon}
        </div>
      </div>
      <p className="text-[11px] font-medium">
        <span className={changeColor}>
          {isUp ? "↑" : "↓"} {change}
        </span>{" "}
        <span className="text-black font-extrabold">vs Last Month</span>
      </p>
    </div>
  );
};

export default ProductivityCard;

import React from "react";
import cn from "classnames";

const colorMap = {
  blue: "bg-blue-200 border-l-4 border-blue-400",
  red: "bg-red-200 border-l-4 border-red-400",
  yellow: "bg-yellow-200 border-l-4 border-yellow-400",
  orange: "bg-orange-200 border-l-4 border-orange-400",
};

export function Shift({ time, position, className }) {
  className = cn("mx-2 p-4", colorMap[position.color]);

  return (
    <div className={className}>
      <h3>{position.name}</h3>
      <h4 className="font-bold">
        {time.start} - {time.end}
      </h4>
    </div>
  );
}

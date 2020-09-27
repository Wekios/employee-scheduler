import React from "react";
import cn from "classnames";

const colorMap = {
  blue: "bg-blue-200",
  red: "bg-red-200",
  yellow: "bg-yellow-200",
};

export function Shift({ position, children, className }) {
  className = cn("mx-2 py-4", colorMap[position.color]);

  return <div className={className}>{children}</div>;
}

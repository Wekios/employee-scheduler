import React from "react";
import cn from "classnames";

export function Cell({ as: Tag = "td", isToday, children, className }) {
  className = cn(
    "border border-gray-600 w-1/8",
    {
      "bg-gray-400": Tag === "th" && !isToday,
      "bg-gray-200": isToday,
      "h-32": Tag === "td",
    },
    className
  );
  return <Tag className={className}>{children}</Tag>;
}

import React from "react";
import cn from "classnames";

export function Button({ theme, className, children, ...rest }) {
  className = cn({ "py-2 px-4 bg-gray-100 border": theme === "primary" }, className);
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

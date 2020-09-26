import React from "react";
import cn from "classnames";

export function EmployeeList({ week }) {
  return (
    <tr>
      {week.map((day) => (
        <td
          className={cn("cell day", { today: day.isToday })}
          key={day.dateObject.getDate()}
        >
          {day.dateObject.toLocaleDateString()}
        </td>
      ))}
    </tr>
  );
}

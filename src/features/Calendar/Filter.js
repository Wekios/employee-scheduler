import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectEmployees, filterEmployees } from "features/Employees/employeesSlice";

const colorMap = {
  blue: "bg-blue-200",
  red: "bg-red-200",
  yellow: "bg-yellow-200",
  orange: "bg-orange-200",
};

export function Filter() {
  const employees = useSelector(selectEmployees);
  const positions = [];

  employees.data.forEach((employee) => {
    if (!positions.includes(employee.position)) positions.push(employee.position);
  });

  const dispatch = useDispatch();

  const handleFilterSelect = (e) => {
    const { value, checked } = e.target;
    dispatch(filterEmployees({ value, checked }));
  };

  return (
    <section className="flex flex-col">
      {positions.map((pos) => (
        <div key={pos.id} className="flex items-center">
          <div className={`w-3 h-3 ${colorMap[pos.color]}`}></div>
          <input
            onChange={handleFilterSelect}
            className="ml-1 mr-1"
            id={pos.id}
            value={pos.id}
            type="checkbox"
          />
          <label htmlFor={pos.id}>{pos.name}</label>
        </div>
      ))}
    </section>
  );
}

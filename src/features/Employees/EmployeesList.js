import React from "react";
import { useSelector } from "react-redux";

import { EmployeeWeek } from "./EmployeeWeek";
import { selectEmployees } from "./employeesSlice";
import { selectShifts } from "features/Shifts/shiftsSlice";
import { Spinner } from "components/Spinner";

export function EmployeesList({ week }) {
  const employees = useSelector(selectEmployees);
  const shifts = useSelector(selectShifts);

  if (!employees.length || !shifts.length)
    return (
      <tr>
        <td colSpan={week.length + 1}>
          <Spinner className="mt-8 mx-auto" />
        </td>
      </tr>
    );

  return employees.map((employee) => (
    <EmployeeWeek key={employee.id} {...employee} weekInfo={week} shifts={shifts} />
  ));
}

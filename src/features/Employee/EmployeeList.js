import React from "react";
import { employees, shifts } from "lib/mock-data";

import { EmployeeWeek } from "./EmployeeWeek";

export function EmployeeList({ week }) {
  return employees.map((employee) => (
    <EmployeeWeek key={employee.id} {...employee} weekInfo={week} shifts={shifts} />
  ));
}

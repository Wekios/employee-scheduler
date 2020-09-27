import React from "react";

import { Header } from "./Header";
import { EmployeesList } from "features/Employees";

export function Calendar({ date }) {
  return (
    <>
      <h2>Calendar</h2>
      <table className="w-full relative">
        <tbody>
          <Header week={date} />
          <EmployeesList week={date} />
        </tbody>
      </table>
    </>
  );
}

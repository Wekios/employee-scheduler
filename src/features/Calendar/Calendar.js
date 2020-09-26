import React from "react";

import { employees } from "lib/mock-data";
import { Header } from "./Header";
import { EmployeeList } from "features/Employee";
import { useDate } from "./useDate";

export function Calendar() {
  const [memoizedDate, onDateChange] = useDate();

  return (
    <main className="calendar">
      <h1>ShiftPlanning</h1>
      <div>
        <button value="-7" onClick={onDateChange}>
          Prev week
        </button>
        <button>today</button>
        <button value="7" onClick={onDateChange}>
          Next week
        </button>
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <Header week={memoizedDate} />
          <EmployeeList week={memoizedDate} {...employees} />
        </tbody>
      </table>
      <br />
    </main>
  );
}

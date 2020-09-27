import React from "react";

import { Header } from "./Header";
import { EmployeeList } from "features/Employee";
import { useDate } from "./useDate";
import { Controls } from "./Controls";

export function Calendar() {
  const [memoizedDate, onDateChange] = useDate();

  return (
    <main className="calendar">
      <h1 className="font-bold text-lg">ShiftPlanning</h1>
      <Controls className="my-2" {...{ onDateChange }} />
      <h2>Calendar</h2>
      <table>
        <tbody>
          <Header week={memoizedDate} />
          <EmployeeList week={memoizedDate} />
        </tbody>
      </table>
      <br />
    </main>
  );
}

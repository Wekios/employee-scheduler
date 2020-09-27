import React, { useMemo } from "react";

import { Employee } from "./Employee";
import { Shift } from "features/Shift/Shift";
import { TableRow } from "components/Table/Row";
import { Cell } from "components/Table/Cell";

export function EmployeeWeek({ id, firstName, lastName, avatar, position, weekInfo, shifts }) {
  const weekSchedule = useMemo(
    () =>
      weekInfo.map((day) => {
        const tbdDay = (shift) => (
          <Cell isToday={day.isToday} key={day.weekDay}>
            {shift}
          </Cell>
        );

        const todaysShifts = shifts.filter(({ date }) => {
          return date === day.date;
        });

        if (!todaysShifts.length) return tbdDay();

        let employeeShift;

        todaysShifts.forEach((shift) => {
          if (shift.employees.filter((e) => e.id === id).length > 0) {
            employeeShift = shift;
          }
        });

        return employeeShift ? tbdDay(<Shift {...employeeShift} />) : tbdDay();
      }),
    [id, shifts, weekInfo]
  );

  return (
    <TableRow>
      <Cell>
        <Employee {...{ firstName, lastName, avatar, position }} />
      </Cell>
      {weekSchedule}
    </TableRow>
  );
}

import React from "react";

import { Cell } from "components/Table/Cell";
import { TableRow } from "components/Table/Row";

export const Header = React.memo(function Header({ week }) {
  const weekDays = week.map(({ weekDay, isToday }) => {
    return (
      <Cell key={weekDay} as="th" isToday={isToday}>
        {weekDay}
      </Cell>
    );
  });

  return (
    <TableRow>
      <Cell as="th">Date:</Cell>
      {weekDays}
    </TableRow>
  );
});

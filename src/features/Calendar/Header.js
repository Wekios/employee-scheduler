import React from "react";

export const Header = React.memo(function Header({ week }) {
  console.log("header", week);

  return (
    <tr>
      {week.map(({ weekDay }) => (
        <th className="cell weekdays" key={weekDay}>
          {weekDay}
        </th>
      ))}
    </tr>
  );
});

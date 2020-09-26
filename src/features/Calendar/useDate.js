import React from "react";

const now = new Date();

export function useDate() {
  const [activeDate, setActiveDate] = React.useState(now);

  const memoizedWeek = React.useMemo(() => {
    const current = new Date(activeDate);
    const week = [];

    // Starting Monday not Sunday
    current.setDate(current.getDate() - current.getDay() + 1);

    for (let i = 0; i < 7; i++) {
      week.push({
        dateObject: new Date(current),
        weekDay: current.toLocaleDateString("en-GB", { weekday: "short" }),
        isToday: now.toDateString() === current.toDateString(),
      });
      current.setDate(current.getDate() + 1);
    }
    return week;
  }, [activeDate]);

  const handleDateChange = (e) => {
    const changeDateBy = +e.target.value;
    const copy = new Date(activeDate);
    copy.setDate(activeDate.getDate() + changeDateBy);
    setActiveDate(new Date(copy));
  };

  return [memoizedWeek, handleDateChange];
}

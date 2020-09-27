import React from "react";

const now = new Date();

export function useDate() {
  const [activeDate, setActiveDate] = React.useState(now);

  const memoizedWeek = React.useMemo(() => {
    const current = new Date(activeDate);
    const week = [];

    // Starting Monday not Sunday
    const startFromMon = current.getDay() === 0 ? -6 : 1;

    current.setDate(current.getDate() - current.getDay() + startFromMon);

    for (let i = 0; i < 7; i++) {
      week.push({
        dateObject: new Date(current),
        weekDay: current.toLocaleDateString("en-GB", { weekday: "short" }),
        isToday: now.toDateString() === current.toDateString(),
        date: current.toDateString(),
      });
      current.setDate(current.getDate() + 1);
    }
    return week;
  }, [activeDate]);

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (value === "today") {
      return setActiveDate(now);
    }
    const changeDateBy = +e.target.value;
    const copy = new Date(activeDate);
    copy.setDate(activeDate.getDate() + changeDateBy);
    setActiveDate(new Date(copy));
  };

  return [memoizedWeek, handleDateChange];
}

import React from "react";

import { useDate } from "hooks/useDate";
import { Calendar, Controls, Filter } from "features/Calendar";
import { Container } from "components/Container";

function App() {
  const [date, onDateChange] = useDate();

  return (
    <>
      <Container as="aside" className="flex justify-between items-center pt-4">
        <Filter />
        <Controls className="my-2" {...{ onDateChange }} />
        <h1 className="font-bold text-lg text-center">ShiftPlanning</h1>
      </Container>
      <Container as="main">
        <Calendar date={date} />
      </Container>
    </>
  );
}

export default App;

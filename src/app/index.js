import React from "react";

import { useDate } from "hooks/useDate";
import { Calendar, Controls } from "features/Calendar";
import { Container } from "components/Container";

function App() {
  const [date, onDateChange] = useDate();

  return (
    <>
      <h1 className="font-bold text-lg">ShiftPlanning</h1>
      <Container as="aside" className="flex">
        <Controls className="my-2" {...{ onDateChange }} />
      </Container>
      <main>
        <Calendar date={date} />
      </main>
    </>
  );
}

export default App;

import React from "react";

import { Button } from "components/Button";

export function Controls({ className, onDateChange }) {
  return (
    <div className={className}>
      <Button theme="primary" value="-7" onClick={onDateChange}>
        &lt;
      </Button>
      <Button theme="primary" value="today" onClick={onDateChange}>
        today
      </Button>
      <Button theme="primary" value="7" onClick={onDateChange}>
        &gt;
      </Button>
    </div>
  );
}

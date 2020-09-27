import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.output.css";
import App from "app";
import store from "app/store";
import { Provider } from "react-redux";
import { fetchEmployees } from "features/Employees/employeesSlice";
import { fetchShifts } from "features/Shifts/shiftsSlice";

store.dispatch(fetchShifts());
store.dispatch(fetchEmployees());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

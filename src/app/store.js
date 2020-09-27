import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "features/Employees/employeesSlice";
import shiftsReducer from "features/Shifts/shiftsSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    shifts: shiftsReducer,
  },
});

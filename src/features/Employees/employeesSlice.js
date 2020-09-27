import { createSlice, createSelector } from "@reduxjs/toolkit";
import { employees } from "lib/mock-data";

export const slice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    setEmployees: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setEmployees } = slice.actions;

// Thunk (redux-toolkit provides out of the box)
export const fetchEmployees = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setEmployees(employees));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEmployees = (state) => state.employees;

export default slice.reducer;

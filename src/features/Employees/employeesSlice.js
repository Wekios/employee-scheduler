import { createSlice } from "@reduxjs/toolkit";
import { employees } from "lib/mock-data";

export const slice = createSlice({
  name: "employees",
  initialState: {
    data: [],
    filteredOut: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.data = action.payload;
    },
    // TODO: Doesn't return them in the order they were created.
    filterEmployees: (state, action) => {
      const { value, checked } = action.payload;
      const id = +value;
      if (checked) {
        const filtered = state.data.filter((t) => t.position.id === id);
        state.filteredOut = [...state.filteredOut, ...filtered];
      } else {
        state.filteredOut = state.filteredOut.filter((t) => t.position.id !== id);
      }
    },
  },
});

export const { setEmployees, filterEmployees } = slice.actions;

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

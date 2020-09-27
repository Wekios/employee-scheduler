import { createSlice } from "@reduxjs/toolkit";
import { shifts } from "lib/mock-data";

export const slice = createSlice({
  name: "shifts",
  initialState: [],
  reducers: {
    setShifts: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setShifts } = slice.actions;

// Thunk (redux-toolkit provides out of the box)
export const fetchShifts = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setShifts(shifts));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectShifts = (state) => state.shifts;

export default slice.reducer;

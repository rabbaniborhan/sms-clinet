import { createSlice } from "@reduxjs/toolkit";

const popUp = {
  show: false,
  data: {},
};

const popUpSlice = createSlice({
  name: "popup-slice",
  initialState: popUp,
  reducers: {
    togglePopUp(state) {
      state.show = !state.show;
    },
  },
});

export const popUpActions = popUpSlice.actions;

export default popUpSlice;

import { configureStore } from "@reduxjs/toolkit";
import popUpSlice from "./popupSlice";

const store = configureStore({
  reducer: { popUp: popUpSlice.reducer },
});

export default store;

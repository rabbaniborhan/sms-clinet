import { configureStore } from "@reduxjs/toolkit";
import popUpSlice from "./popUpSlice";

const store = configureStore({
  reducer: { popUp: popUpSlice.reducer },
});

export default store;

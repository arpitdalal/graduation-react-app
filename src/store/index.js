import { configureStore } from "@reduxjs/toolkit";

import graduationReducer from "../slices/graduation";

export const store = configureStore({
  reducer: { graduation: graduationReducer },
});

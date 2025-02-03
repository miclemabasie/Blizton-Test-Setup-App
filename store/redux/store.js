import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./slice/propertiesSlice";
import carsReducer from "./slice/carsSlice";
import landsReducer from "./slice/landsSlice";

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    cars: carsReducer,
    lands: landsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import coinReducer from "../redux/coinSlice";
import favoritesReducer from "redux/favoritesSlice";
export const store = configureStore({
  reducer: {
    coin: coinReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

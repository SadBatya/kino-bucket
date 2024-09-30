import { configureStore } from "@reduxjs/toolkit";
import favouriteFilmReducer from "./favouriteFilmsSlice";

export const store = configureStore({
  reducer: {
    favouriteFilms: favouriteFilmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

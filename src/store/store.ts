import { configureStore } from "@reduxjs/toolkit";
import favouriteFilmReducer from "./favouriteFilmsSlice";
import { kinopoiskApi } from "./kinopoiskApi";
import filmNameSearchResult from './filmNameSearchResultSlice'
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    favouriteFilms: favouriteFilmReducer,
    filmNameSearchResult: filmNameSearchResult,
    user: userReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

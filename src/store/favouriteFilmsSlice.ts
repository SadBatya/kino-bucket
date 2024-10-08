import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilm {
  name?: string;
  year?: number;
  poster?: string;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  description?: string;
  country?: string;
  genre?: string;
  kinopoisk_id?: number;
}
interface IFilms {
  films: IFilm[];
}

const initialState: IFilms = {
  films: [],
};

const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState,
  reducers: {
    addFilm: (state, action: PayloadAction<IFilm>) => {
      const filmExists = state.films.some(
        (film) => film.kinopoisk_id === action.payload.kinopoisk_id
      );

      if (!filmExists) {
        state.films.push(action.payload);
      }
    },
  },
});

export const { addFilm } = favouriteFilmsSlice.actions;
export default favouriteFilmsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState: {
    films: [],
  },
  reducers: {},
});


export default favouriteFilmsSlice.reducer


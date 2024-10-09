import { createSlice } from "@reduxjs/toolkit";

interface IFilmNameSearchResult {
  resultDataSearch: string
}

const initialState:IFilmNameSearchResult = {
  resultDataSearch: ''
}

const filmNameSearchResult = createSlice({
  name: "filmNameSearchResult",
  initialState,
  reducers: {
    putResultNameSearch: (state, action) => {
      state.resultDataSearch = action.payload
    },
  },
});

export const { putResultNameSearch } = filmNameSearchResult.actions;
export default filmNameSearchResult.reducer;

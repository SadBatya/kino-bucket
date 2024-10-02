import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser{
  isUserLogin: boolean
}

const initialState: IUser = {
  isUserLogin: false,
};

const favouriteFilmsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLogin: (state, action: PayloadAction<boolean>) => {
      state.isUserLogin = action.payload
    },
  },
});

export const { isLogin } = favouriteFilmsSlice.actions;
export default favouriteFilmsSlice.reducer;

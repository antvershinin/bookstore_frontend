import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
  name: string;
}

export const initialState = {
  user: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ username: string }>) => {
      state.user = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

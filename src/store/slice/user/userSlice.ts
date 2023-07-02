import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../api/user/types";
import { api } from "../../../api";

type State = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await api.user.getUsers();
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users.";
      });
  },
});

export default userSlice.reducer;

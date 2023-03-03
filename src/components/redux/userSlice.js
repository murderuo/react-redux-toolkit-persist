import { createSlice } from '@reduxjs/toolkit';

// const initialState =[];
const initialState = { users: [] };

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // state.push(action.payload);
      return { users: [...state.users, action.payload] };
      // return state.users.push(action.payload)
    },
    // deleteUser: () => {},
    // login: () => {},
    logout: (state, action) => ({ users: [] }),
  },
});

export const { addUser, deleteUser, login, logout } = userSlice.actions;

export default userSlice.reducer;

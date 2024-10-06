import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Alice', email: 'aliccccce@example.com' },
    { id: 2, name: 'Mary Smith', email: 'smith@example.com' },
    { id: 3, name: 'John Doe', email: 'dj@example.com' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user') || '{}'),
    settings: false,
    byPass: false,
  },
  reducers: {
    signUp(state, action) {
      console.log(action.payload);
    },
    signIn(state, action) {
      localStorage.setItem('access_token', action.payload.data.access_token);
      localStorage.setItem('user', JSON.stringify(action.payload.data.userInfo));
    },
    setProfile(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload.data));
    },
    signOut(state) {
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      state.current = {};
    },
    editInfo(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload.data));
    },
  },
});

export default userSlice;

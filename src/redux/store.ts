import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../pages/AuthPage/userSlice';
import globalSlice from './globalSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    global: globalSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

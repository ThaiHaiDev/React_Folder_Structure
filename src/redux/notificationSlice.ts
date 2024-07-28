import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notificationKey: false,
    notificationTitle: '',
    notificationDes: '',
    numberOfNotification: -1,
  },
  reducers: {
    subscribeOnNotification(state, action) {
      state.notificationKey = true;
      state.notificationTitle = action.payload;
    },
    subscribeOffNotification(state) {
      state.notificationKey = false;
    },
    subscribeNumberOfNotification(state, action) {
      state.numberOfNotification = action.payload;
    },
  },
});

export default notificationSlice;

import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  token: '',
};

export const pushNotificationSlice = createSlice({
  name: 'pushNotification',
  initialState,
  reducers: {
    setToken: (state, actions) => {
      console.log('SET Token Called');
      state.token = actions.payload;
    },
  },
});
export const {setToken} = pushNotificationSlice.actions;
export default pushNotificationSlice.reducer;

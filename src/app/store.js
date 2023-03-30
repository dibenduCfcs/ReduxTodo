import {configureStore} from '@reduxjs/toolkit';
import addTodoReducer from '../features/AddTodo/AddTodoSlice';
import pushNotificationReducer from '../features/AddTodo/pushNotificationSlice';
import apiSlice from '../features/Api/apiSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    addTodoReducer: addTodoReducer,
    pushNotificationReducer: pushNotificationReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

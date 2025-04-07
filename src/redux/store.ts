import {configureStore} from '@reduxjs/toolkit';
import {mobileApi} from './services/mobileApi';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    [mobileApi.reducerPath]: mobileApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(mobileApi.middleware),
});

export default store;

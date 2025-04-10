import {configureStore} from '@reduxjs/toolkit';
import {mobileApi} from './services/mobileApi';
import userSlice from './slices/userSlice';
import {resturantApi} from './services/resturantApi';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    [resturantApi.reducerPath]: resturantApi.reducer,
    [mobileApi.reducerPath]: mobileApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(mobileApi.middleware, resturantApi.middleware),
});

export default store;

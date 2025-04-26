import {createSlice} from '@reduxjs/toolkit';
import {userSliceInitialStateType} from '../../interfaces/user.interface';
import {storage} from '../../utils/MMKV';
const storedUser = storage.getString('user');

const initialState: userSliceInitialStateType = {
  user: storedUser ? JSON.parse(storedUser) : null,
  authLogin: storage.getString('authLogin') === 'true' || false,
  theme: storage.getString('theme') || 'dark',
  onboarding: storage.getString('onboarding') === 'true' || false,
  notificationEnabled:
    storage.getString('notificationEnabled') === 'true' || false,
  cart: storage.getString('cart')
    ? JSON.parse(storage.getString('cart') || '[]')
    : [],
  favoriteRestaurants: [],
  language: storage.getString('language') || 'tr',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthLogin: (state, action) => {
      state.authLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
      state.authLogin = false;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      storage.set('theme', action.payload);
    },
    setOnboardingComplete: (state, action) => {
      state.onboarding = action.payload;
    },
    setNotificationEnabled: (state, action) => {
      state.notificationEnabled = action.payload;
    },
    setLogout: state => {
      state.user = null;
      state.authLogin = false;
      state.onboarding = false;
      state.notificationEnabled = false;
      storage.delete('user');
      storage.delete('authLogin');
      storage.delete('theme');
      storage.delete('onboarding');
      storage.delete('notificationEnabled');
    },
    setCart: (state, action) => {
      state.cart = action.payload;
      storage.set('cart', JSON.stringify(action.payload));
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      storage.set('language', action.payload);
    },
    setFavoriteRestaurants: (state, action) => {
      const item = action.payload;
      const isFavorite = state.favoriteRestaurants.some(
        (restaurant: any) => restaurant.id === item.id,
      );
      if (isFavorite) {
        state.favoriteRestaurants = state.favoriteRestaurants.filter(
          (restaurant: any) => restaurant.id !== item.id,
        );
      } else {
        state.favoriteRestaurants.push(item);
      }
    },
  },
});

export const {
  setAuthLogin,
  setUser,
  clearUser,
  setTheme,
  setOnboardingComplete,
  setNotificationEnabled,
  setLogout,
  setCart,
  setLanguage,
  setFavoriteRestaurants,
} = userSlice.actions;
export default userSlice.reducer;

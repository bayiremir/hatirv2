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
} = userSlice.actions;
export default userSlice.reducer;

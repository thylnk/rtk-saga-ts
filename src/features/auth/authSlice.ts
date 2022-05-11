import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state: AuthState, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state: AuthState, action: PayloadAction<LoginPayload>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = null;
    },
    loginFailed(state: AuthState, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state: AuthState) {
      state.logging = false;
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

// actions,
export const authActions = authSlice.actions;

// selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

// reducer
const authReducer = authSlice.reducer;
export default authReducer;

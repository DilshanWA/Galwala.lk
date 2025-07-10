import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  userRole: 'buyer' | 'seller' | null;
  uid: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userRole: null,
  uid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ role: 'buyer' | 'seller'; uid: string }>) {
      state.isLoggedIn = true;
      state.userRole = action.payload.role;
      state.uid = action.payload.uid;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userRole = null;
      state.uid = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

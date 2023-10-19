import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return{
      
      ...state,
      currentUser: action.payload,
    }
  },
    setVerified: (state) => {
      if (state.currentUser) {
        state.currentUser.verified = true;
      }
    },
  },
});

export const { setCurrentUser, setVerified } = userSlice.actions;
export default userSlice.reducer;

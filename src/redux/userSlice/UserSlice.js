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

    deleteUser: (state) => {
      state.currentUser = null;
    },

  },
});

export const { setCurrentUser, setVerified, deleteUser } = userSlice.actions;
export default userSlice.reducer;

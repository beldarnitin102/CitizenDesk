import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
  name: "complaint",

  initialState: {
    complaints: [],
    loading: false,
  },

  reducers: {
    setComplaints: (state, action) => {
      state.complaints = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setComplaints,
  setLoading,
} = complaintSlice.actions;

export default complaintSlice.reducer;
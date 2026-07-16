import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complaints: [],

  selectedComplaint: null,

  filters: {
    status: "",

    category: "",

    priority: "",
  },
};

const complaintSlice = createSlice({
  name: "complaint",

  initialState,

  reducers: {
    setComplaints: (state, action) => {
      state.complaints = action.payload;
    },

    setSelectedComplaint: (state, action) => {
      state.selectedComplaint = action.payload;
    },

    addComplaint: (state, action) => {
      state.complaints.unshift(action.payload);
    },

    clearComplaints: (state) => {
      state.complaints = [];
    },

    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const {
  setComplaints,
  setSelectedComplaint,
  addComplaint,
  clearComplaints,
  setFilters,
} = complaintSlice.actions;

export default complaintSlice.reducer;

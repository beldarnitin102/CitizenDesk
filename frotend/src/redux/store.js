import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import complaintReducer from "./slices/complaintSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    complaint: complaintReducer,
    loading: loadingReducer,
  },
});
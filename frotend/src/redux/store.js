import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import languageReducer from "./slices/languageSlice";
import complaintReducer from "./slices/complaintSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
    complaint: complaintReducer,
    theme: themeReducer,
  },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../Slicers/MainSlicer.jsx"; // Import the reducer, not the slice

export const store = configureStore({
  reducer: {
    main: mainReducer, // Use the reducer under the 'main' key
    // Add other reducers if needed
  },
  // Other configuration options
});

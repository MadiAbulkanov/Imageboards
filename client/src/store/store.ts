import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "../features/message.slice";

export const store = configureStore({
    reducer: { 
        [messageSlice.name]: messageSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
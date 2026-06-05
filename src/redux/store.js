import { configureStore } from "@reduxjs/toolkit";
import infosReducer from "./infos";
import pageReducer from "./links";

export const store = configureStore({
    reducer: {
        infos: infosReducer,
        page: pageReducer,
    },
});


import { createSlice } from "@reduxjs/toolkit";

const links = createSlice({
    name: "update-page",
    initialState: {
        page: "PersonalInfo",
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const { setPage } = links.actions;
export default links.reducer;

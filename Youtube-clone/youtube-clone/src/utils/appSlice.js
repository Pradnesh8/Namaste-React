import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        sideNav: true,
        searchQuery: ""
    },
    reducers: {
        toggleSideNav: (state) => {
            state.sideNav = !state.sideNav;
        },
        closeSideNav: (state) => {
            state.sideNav = false;
        },
        searchVideo: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
})

export const { toggleSideNav, closeSideNav, searchVideo } = AppSlice.actions;
export default AppSlice.reducer;
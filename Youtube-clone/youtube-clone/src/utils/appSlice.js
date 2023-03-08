import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        sideNav: true
    },
    reducers: {
        toggleSideNav: (state) => {
            state.sideNav = !state.sideNav;
        },
        closeSideNav: (state) => {
            state.sideNav = false;
        }
    }
})

export const { toggleSideNav } = AppSlice.actions;
export default AppSlice.reducer;
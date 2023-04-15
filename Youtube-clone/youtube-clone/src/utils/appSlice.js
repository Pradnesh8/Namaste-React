import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        sideNav: true,
        selectedCategory: "all"
    },
    reducers: {
        toggleSideNav: (state) => {
            state.sideNav = !state.sideNav;
        },
        closeSideNav: (state) => {
            state.sideNav = false;
        },
        changeCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const { toggleSideNav, closeSideNav, changeCategory } = AppSlice.actions;
export default AppSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchCache: {}
    },
    reducers: {
        updateSearchCache: (state, action) => {
            state.searchCache[action.payload[0]] = action.payload[1];
        }
    }
})

export const { updateSearchCache } = searchSlice.actions;
export default searchSlice.reducer;
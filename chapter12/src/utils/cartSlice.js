import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // if (state.items.length > 0)
            state.items.find(({ id }) => id === action.payload.id) ?
                state.items = state.items.map(item => item.id === action.payload.id ? { ...item, count: item.count + 1 } : item)
                : state.items.push({ ...action.payload, count: 1 });
            // else state.items.push({ ...action.payload, count: 1 });
        },
        removeItem: (state, action) => {
            state.items.find(({ id, count }) => id === action.payload && count > 1) ?
                state.items = state.items.map(item => item.id === action.payload ? { ...item, count: item.count - 1 } : item)
                : state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearItem: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
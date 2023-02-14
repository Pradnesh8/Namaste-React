import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({ ...action.payload, count: 1 });
        },
        incrementItem: (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...item, count: item.count + 1 } : item);
        },
        decrementItem: (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...item, count: item.count - 1 } : item);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
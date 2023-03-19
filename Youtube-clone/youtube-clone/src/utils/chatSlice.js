import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_MESSAGE_COUNT } from "./config";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addLiveMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_MESSAGE_COUNT, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export const { addLiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItem(state, action) {
            return [
                ...state,
                action.payload
            ]
        },
        removeItem(state, action) {
            const newArr = state.splice(action.payload);
            return newArr;
        }
    }
})

export const { addItem, removeItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
import { createSlice, nanoid } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItem(state, action) {
            return [
                ...state,
                {
                    name: action.payload.name,
                    cost: action.payload.cost,
                    id: nanoid(),
                }
            ]
        },
        removeItem(state, action) {
            const newArr = state.filter((item) => {
                return item.id !== action.payload;
            })
            return newArr;
        }
    }
})

export const { addItem, removeItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
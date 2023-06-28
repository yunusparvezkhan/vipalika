import { createSlice, nanoid } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        // addItem() functon expects one object as parameter with two props as name & cost, which expects the name & cost of the item respectively
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

        // removeItem() functon expects one string as parameter, which should be the id of the item intended to be deleted.
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
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        addName(state, action) {
            return {
                ...state,
                name: action.payload
            }
        },
        addCost(state, action) {
            return {
                ...state,
                cost: action.payload
            }
        }
    }
})

export const { addName, addCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
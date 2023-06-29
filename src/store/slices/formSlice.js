import { createSlice } from "@reduxjs/toolkit";
import { addItem } from './itemsSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        // addName() func expects one parameter with the new name
        addName(state, action) {
            return {
                ...state,
                name: action.payload
            }
        },
        // addCost() func expects one parameter with the new cost (must be a integer)
        addCost(state, action) {
            return {
                ...state,
                cost: action.payload
            }
        }
    },

    extraReducers(builder) {
        builder.addCase(addItem, (state) => {
            state.name = '';
            state.cost = 0;
        })
    }
})

export const { addName, addCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const itemsSearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ""
    },
    reducers: {
        changeSearchTerm(state, action) {
            return {
                ...state,
                searchTerm: action.payload
            }
        },
    }

})

export const { changeSearchTerm } = itemsSearchSlice.actions;
export const itemsSearchReducer = itemsSearchSlice.reducer;
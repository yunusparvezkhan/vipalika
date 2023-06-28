import { createSlice } from "@reduxjs/toolkit";

const itemsSearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: ""
    },
    reducers: {
        // changeSearchTerm() function expects one string as parameter, which should be the new search term.
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
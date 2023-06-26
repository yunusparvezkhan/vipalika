import { createReducer } from "@reduxjs/toolkit";

const itemsSearchSlice = createReducer({
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
        }
    }

})

export const itemsSearchReducer = itemsSearchSlice.reducer;
export const { changeSearchTerm } = itemsSearchSlice.actions;
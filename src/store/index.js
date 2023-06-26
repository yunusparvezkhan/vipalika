import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // add slice reducers
    }
})

export { store }
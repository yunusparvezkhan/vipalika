import { configureStore } from "@reduxjs/toolkit";
import { formReducer, addName, addCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        form: formReducer
    }
})


export { store };

// export formSlice actions
export { addName, addCost };

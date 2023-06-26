import { configureStore } from "@reduxjs/toolkit";
import { formReducer, addName, addCost } from "./slices/formSlice";
import { itemsReducer, addItem, removeItem } from "./slices/itemsSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        items: itemsReducer,
    }
})


export { store };

// export formSlice actions
export { addName, addCost };

// export itemsReducer actions
export { addItem, removeItem };

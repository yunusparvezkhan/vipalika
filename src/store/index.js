import { configureStore } from "@reduxjs/toolkit";
import { formReducer, addName, addCost } from "./slices/formSlice";
import { itemsReducer, addItem, removeItem } from "./slices/itemsSlice";
import { itemsSearchReducer, changeSearchTerm } from "./slices/itemsSearchSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        items: itemsReducer,
        search: itemsSearchReducer,
    }
})


export { store };

// export formSlice actions
export { addName, addCost };

// export itemsReducer actions
export { addItem, removeItem };

// export itemsSearchReducer actions
export { changeSearchTerm };
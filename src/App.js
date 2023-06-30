import React from "react";
import ItemForm from "./components/ItemForm";
import ItemSearch from "./components/ItemSearch";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-heading">
          VipaLika 📃
        </h1>
        <ItemForm />
        <ItemSearch />
        <ItemList />
      </div>
    </div>
  );
}

export default App;

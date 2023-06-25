import React from "react";
import ItemForm from "./components/ItemForm";
import ItemSearch from "./components/ItemSearch";
import ItemList from "./components/ItemList";
import ItemValue from "./components/ItemValue";

function App() {
  return (
    <div className="App">
      <h1>
        VipaLika 📃
      </h1>
      <ItemForm />
      <ItemSearch />
      <ItemList />
      <ItemValue />
    </div>
  );
}

export default App;

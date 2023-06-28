import React from "react";
import ItemForm from "./components/ItemForm";
import ItemSearch from "./components/ItemSearch";
import ItemList from "./components/ItemList";
import ItemValue from "./components/ItemValue";
import './app.css'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-heading">
          VipaLika 📃
        </h1>
        <ItemForm />
        {/* <ItemSearch /> */}
        <ItemList />
        {/* <ItemValue /> */}
      </div>
    </div>
  );
}

export default App;

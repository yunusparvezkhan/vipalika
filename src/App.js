import React from "react";
import CarForm from "./components/carForm";
import CarSearch from "./components/carSearch";
import CarList from "./components/carList";
import CarValue from "./components/carValue";

function App() {
  return (
    <div className="App">
      <h1>
        App
      </h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlants(data));
  }, []);

  const displayedPlants = plants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant]);
}

  return (
    <div className="app">
      <h1>Plantsy Admin</h1>
      <Search onSearchChange={setSearchTerm} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={displayedPlants} />
      </div>
  );
}


export default App;

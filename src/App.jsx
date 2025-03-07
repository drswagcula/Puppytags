import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <>
      {puppies.map((puppy) => (
        <h1 
          key={puppy.id} 
          onClick={() => setFeatPupId(puppy.id)} 
          style={{ cursor: "pointer", color: featPupId === puppy.id ? "blue" : "black" }}
        >
          {puppy.name}
        </h1>
      ))}

      {featPupId && featuredPup && (
        <>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </>
      )}
    </>
  );
}

export default App;

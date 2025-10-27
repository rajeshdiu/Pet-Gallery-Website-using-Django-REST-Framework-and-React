import { useEffect, useState } from "react";
import api from "../api.js";
import About from "./About";

function DogLists() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    api
      .get("dogs/")
      .then((res) => setDogs(res.data))
      .catch((err) => console.error("Error fetching dogs", err));
  }, []);

  if (!dogs.length) {
    return <p>Loading Dogs...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {dogs.map((dog) => (
        <About key={dog.id} name={dog.name} age={dog.age} img={dog.img} />
      ))}
    </div>
  );
}

export default DogLists;

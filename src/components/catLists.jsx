import { useEffect, useState } from "react";
import api from "../api.js";
import About from "./About";

function CatLists() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    api
      .get("cats/")
      .then((res) => setCats(res.data))
      .catch((err) => console.error("Error fetching cats", err));
  }, []);

  if (!cats.length) {
    return <p>Loading Cats...</p>;
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
      {cats.map((cat) => (
        <About key={cat.id} name={cat.name} age={cat.age} img={cat.img} />
      ))}
    </div>
  );
}

export default CatLists;

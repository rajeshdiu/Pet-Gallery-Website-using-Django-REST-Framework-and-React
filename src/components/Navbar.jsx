import { useState } from "react";

function Navbar({ onMenuChange }) {
  const [activeMenu, setActiveMenu] = useState("all");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onMenuChange(menu);
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px 20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white", margin: 0 }}>Pet Gallery</h2>
        <button
          onClick={() => handleMenuClick("all")}
          style={{
            backgroundColor: activeMenu === "all" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          All Pets
        </button>
        <button
          onClick={() => handleMenuClick("dogs")}
          style={{
            backgroundColor: activeMenu === "dogs" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Dogs
        </button>
        <button
          onClick={() => handleMenuClick("cats")}
          style={{
            backgroundColor: activeMenu === "cats" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Cats
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

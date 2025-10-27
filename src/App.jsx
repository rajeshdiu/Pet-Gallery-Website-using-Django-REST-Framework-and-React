import { useState } from "react";
import Navbar from "./components/Navbar";
import CatLists from "./components/catLists";
import DogLists from "./components/dogLists";

function App() {
  const [activeMenu, setActiveMenu] = useState("all");

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      {activeMenu === "all" && (
        <>
          <DogLists />
          <CatLists />
        </>
      )}
      {activeMenu === "dogs" && <DogLists />}
      {activeMenu === "cats" && <CatLists />}
    </div>
  );
}

export default App;

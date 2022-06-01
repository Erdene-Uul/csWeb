import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import OnePost from "./components/news/OnePost";
function App() {
  const [sideBar, showSideBar] = useState(false);
  const toggleSideBar = () => {
    showSideBar((s) => !s);
  };
  return (
    <div className="font-Roboto">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home toggleSideBar={toggleSideBar} sideBar={sideBar} />}
        />
        <Route exact path="/:slug" element={<OnePost />} />
      </Routes>
    </div>
  );
}

export default App;

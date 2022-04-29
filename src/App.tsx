import React, { useState } from "react";
import Navigation from "./navigation";
import Home from "./home";
import Login from "./login";
import { UserContext } from "./userContext";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import DetailedView from "./detailed-view";

function App() {
  const [userName, setUserName] = useState<string>("");

  return (
    <div className="container-flex">
      <UserContext.Provider value={{ userName, setUserName }}>
        {/* <UserContext.Provider value={userName}> */}
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={<Login userName={userName} setUserName={setUserName} />}
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detailedView" element={<DetailedView />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

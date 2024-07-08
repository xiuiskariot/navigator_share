import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TabsHub } from "./TabsHub";
import { Slide } from "./Slide";
import { IconLogo } from "./assets/IconLogo";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);
  return (
    <div className="App">
      <IconLogo/>
      <h1>Lorem ipsum dolor</h1>
      <TabsHub setActiveTab={setActiveTab} activeTab={activeTab} />
      <Slide activeTab={activeTab} />
    </div>
  );
}

export default App;

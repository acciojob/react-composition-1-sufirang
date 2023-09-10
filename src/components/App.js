
import React from "react";
import './../styles/App.css'; 
import Tabs from "./Tabs";

const tabs = [
{tittle:"Tab 1", content:"Tabs 1"},
{tittle:"Tab 2", content:"Tabs 2"},
{tittle:"Tab 3", content:"Tabs 3"}
]

const App = () => {
  return (
    <div>
          <Tabs tabs = {tabs}/>
    </div>
  )
}

export default App

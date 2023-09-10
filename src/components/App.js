
import React from "react";
import './../styles/App.css'; 
import Tabs from "./Tabs";

const tabs = [
{tittles:"Tab 1", contents:"Tabs 1"},
{tittles:"Tab 2", contens:"Tabs 2"},
{tittle:"Tab 3", contents:"Tabs 3"}
]

const App = () => {
  return (
    <div>
          <Tabs tabs = {tabs}/>
    </div>
  )
}

export default App

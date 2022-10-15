import './App.css';
import Authorization from "./pages/Authorization/Authorization";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes path="/" element={<Authorization/>}/>
        <Routes path="/start" element={<Authorization/>}/>
      <Authorization/>
    </div>
  );
}

export default App;

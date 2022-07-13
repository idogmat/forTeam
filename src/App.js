import React from "react";
import {
    Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team";
import Works from "./components/Works";
import NoMatch from "./components/NoMatch";
import Profile from "./components/Profile";
import Forum from "./components/Forum";
import Tasks from "./components/Tasks";
import Learn from "./components/Learn";

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <Navbar/>
        </header>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Profile/>} />
                  <Route path="/Team" element={<Team/>}/>
                  <Route path="/Works" element={<Works/>}/>
                  <Route path="/Forum" element={<Forum/>}/>
                  <Route path="/Tasks" element={<Tasks/>}/>
                  <Route path="/Learn" element={<Learn/>}/>
                  <Route path="/*" element={<NoMatch/>}/>
              </Routes>
          </div>


    </div>
  )
}

export default App;

import React from "react";
import {
    Route, Switch
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>

          <Navbar/>
            <Switch>
          <Route path="/">
              <Team/>
          </Route>
            </Switch>

      </header>
    </div>
  )
}

export default App;

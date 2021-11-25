import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Overview from "./Pages/overview";
import About from "./Pages/About";
import Team from "./Pages/team";
import Player from "./Pages/player";
import Teamdetail from "./Pages/Teamdetail";
import Playerdetail from "./Pages/playerdetail";


function App(){
  return(
    <div className="app">
      <header className = "header">
        <div className = "containerhead">
          <img className = "container"
          src={'https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/bltc7c53e4b622eedc6/60edc8e84ff91563ab257e27/OWL_Playoffs_2021_Logo_Vert_MultiColor_DkBkgd.png?auto=webp'}/>
 
        </div>
      </header>
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate replace to="/overview" />} />
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/team/:itemId" element={<Teamdetail />}></Route>
          <Route path="/player/:itemId" element={<Playerdetail />}></Route>

        </Routes>
        <footer>
          <div className="containernav">
            <NavLink to="/overview" className="iconwrapper">
              <h3>Overview</h3>
            </NavLink>
            <NavLink to="/team" className="iconwrapper">
            <h3>Team</h3>
            </NavLink>
            <NavLink to="/player" className="iconwrapper">
            <h3>Top Player</h3>
            </NavLink>
            <NavLink to="/about" className="iconwrapper">
            <h3>About</h3>
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );

}

export default App;
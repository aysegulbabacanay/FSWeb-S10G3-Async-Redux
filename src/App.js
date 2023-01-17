import React from 'react';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import Main from "./Main";
import Kaydedilen from './Kaydedilen';

function App() {

  return (
    <div className="App">
      <div className="container">
        <section className="content">
          <nav className='navs'>
            <NavLink className="menumuz" activeClassName="selected" to="/" exact>Aktivite Getir</NavLink>
           
            <NavLink className="menumuz" activeClassName="selected" to="/saved">Kaydedilen</NavLink>
          </nav>
        
          <Switch>
            <Route exact path="/" component={Main} />
           
            <Route path="/saved" component={Kaydedilen} />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/PagesIndex";
import CVPage from "./Pages/CVPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/CV' component={CVPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;

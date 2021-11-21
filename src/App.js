import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/PagesIndex";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/projectspage' component={ProjectsPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;

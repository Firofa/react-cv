import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Educations from './pages/Educations';
import Experiences from './pages/Experiences';
import Portfolios from './pages/Portfolios';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/educations" component={Educations} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/portfolios" component={Portfolios} />
        </Switch>
      </>
    </Router>
    );
}

export default App;

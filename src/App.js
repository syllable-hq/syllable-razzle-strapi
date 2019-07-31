import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Components/Home';
import About from './Components/About';
import Comp404 from './Components/404';
import './App.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path='/about' component={About} />
    <Route component={Comp404} />
  </Switch>
);

export default App;

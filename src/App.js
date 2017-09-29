import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/index';
import PhotoBooth from './photo-booth/index';
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/photobooz' component={PhotoBooth}/>
    </Switch>
  </div>
);

export default App;

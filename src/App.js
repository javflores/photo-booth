import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhotoBooth from './photo-booth/index';
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
        <Route exact path='/photobooth' component={PhotoBooth}/>
    </Switch>
  </div>
);

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhotoBooth from './photo-booth/index';
import PhotoStore from './store/index';
import './App.css';

const store = new PhotoStore();

const App = () => (
  <div className="App">
    <Switch>
        <Route exact path="/photobooth"
               render={props =>
                   <PhotoBooth store={store} {...props} />
               } />
    </Switch>
  </div>
);

export default App;

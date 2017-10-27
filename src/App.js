import React from 'react';
import PhotoBooth from './components/index';
import PhotoStore from './store/index';
import './App.css';

const store = new PhotoStore();

const App = () => (
  <div className="App">
      <PhotoBooth store={store} />
  </div>
);

export default App;

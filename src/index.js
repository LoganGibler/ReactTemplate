
import React, {useState} from 'react';
import {useEffect} from 'react'
import ReactDOM from 'react-dom';
import {Header} from './components';

const App = () => {
  return (
    <Router>
      <div id="App">
        <Header />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
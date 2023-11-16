import logo from './logo.svg';
import React ,{ Component } from 'react';
import './App.css';
import Compo2 from './components/greet';
import Welcome from './components/gta';

function App() {
  return(
    <div className='App'>
      <p>hello</p>
      <Compo2 namel= {<input type='text' />} />
      <Welcome/>
      </div>
  );
}

export default App;

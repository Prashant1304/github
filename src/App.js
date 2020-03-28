import React from 'react';
import './App.css';

import NavbarNew from './components/HeaderNew';
import MainBody from './components/left';
import Fooder from "./components/fooder"
// import Ad from "./components/ad"

function App() {

  return (
    <div className="App">
      <NavbarNew />
      <MainBody />
      <Fooder/>
      {/* <Ad/> */}
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlueComponent from './BlueComponent';
import RedComponent from './RedComponent';
import Home from './Home';

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<BlueComponent />} />
        <Route path="/red" element={<RedComponent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainContainer;

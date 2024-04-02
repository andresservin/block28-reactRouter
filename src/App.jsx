import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import BlueComponent from './BlueComponent';
import RedComponent from './RedComponent';
import Home from './Home';
import Navbar from './Navbar';
import MainContainer from './MainContainer';

//const BlueComponent = () => <h1>This is the Blue Component</h1>;
//const RedComponent = () => <h1>This is the Red Component</h1>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {}
    <>
      <div id="container">
      <Navbar />
      <MainContainer>
        <Link to = "/blue" > Blue </Link>
        <Link to = "/red" > Red </Link>
        <Link to = "/" >Home</Link>
        <Routes>
          <Route path="/blue" element={<BlueComponent/>} />
          <Route path="/red" element={<RedComponent/>} />
          <Route path="/" element= {<Home />} />
        </Routes>
        </MainContainer>
      </div>
      <Footer/>
    </>
    </Router>
  );
}

export default App;

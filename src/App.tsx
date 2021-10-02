import React, {useEffect, useState} from 'react';
import { BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Body from './routing/Routes/body';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

function App() {

  
//  console.log(blogs);
 
  return (
    <BrowserRouter>
    <div className="App">
      <header >
        <Nav />
       <Body />
       <Footer />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;

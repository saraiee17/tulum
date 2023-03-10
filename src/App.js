import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/Contact' element ={<Contact/>} />
        </Routes>
      </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
